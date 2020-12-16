import { computed, provide, ref, inject } from '@vue/composition-api'
import { useGFW } from './gfw';

export function useDownloadSource() {
    return { source: inject('source', ref('auto')) }
}

/**
 * @param {import('@vue/composition-api').Ref<string>} version
 * @param {import('@vue/composition-api').Ref<{ assets?: { name: string; browser_download_url: string }[] }>} release 
 */
export function provideArtifacts(version, release) {
    const { inGFW } = useGFW();
    const { source } = useDownloadSource();
    // function getGithubUrl(name) { return `https://github.com/Voxelum/x-minecraft-launcher/releases/download/v${version}/${name}`; }
    function getAzureUrl(name) { return `https://xmcl-release.azureedge.net/releases/${name}`; }
    function getAzureMsUrl(name) { return `https://xmcl-release-ms.azureedge.net/releases/${name}`; }
    function getBaiduUrl(name) { return `http://maven.jihuayu.site/assets-xmcl/${version.value}/${name}`; }
    function getUrl(find) {
        if (!release.value) return ''
        const result = release.value.assets.find(find)
        if (result) {
            if (source.value === 'auto') {
                return inGFW.value ? getBaiduUrl(result.name) : result.browser_download_url
            } else if (source.value === 'azure') {
                return getAzureUrl(result.name)
            } else if (source.value === 'azure-ms') {
                return getAzureMsUrl(result.name)
            } else if (source.value === 'baidu') {
                return getBaiduUrl(result.name);
            }
            return result.browser_download_url
        }
        return '';
    }
    const winWeb = computed(() => getUrl(a => a.name.indexOf('Web-Setup') !== -1 && a.name.endsWith('.exe')))
    const winZip = computed(() => getUrl(a => a.name.endsWith('win.zip') && a.name.indexOf('ia32') === -1))
    const winNsis = computed(() => getUrl(a => a.name.indexOf('-Setup') !== -1 && a.name.endsWith('.exe') && a.name.indexOf('Web') === -1))
    const macZip = computed(() => getUrl(a => a.name.endsWith('mac.zip')))
    const macDmg = computed(() => getUrl(a => a.name.endsWith('.dmg')))
    const deb = computed(() => getUrl(a => a.name.endsWith('.deb')))
    const snap = computed(() => getUrl(a => a.name.endsWith('.snap')))
    const appImage = computed(() => getUrl(a => a.name.endsWith('.AppImage')))
    const rpm = computed(() => getUrl(a => a.name.endsWith('.rpm')))

    provide('artifacts', {
        winWeb,
        winZip,
        winNsis,
        macZip,
        macDmg,
        deb,
        snap,
        appImage,
        rpm
    });
}

export function useArtifacts() {
    return inject('artifacts')
}

export function provideGithubInfo() {
    const releases = ref([])
    const latest = computed(() => releases.value[0])
    const latestVersion = computed(() => latest.value ? latest.value.tag_name : 'unknown')
    const prerelease = computed(() => latest.value ? !!latest.value.prerelease : false)

    fetch('https://api.github.com/repos/voxelum/x-minecraft-launcher/releases')
        .then(resp => resp.json())
        .then(r => releases.value = r);

    const github = {
        latest,
        latestVersion,
        prerelease,
    }
    provide('github', github)
    return github
}

export function useGithubInfo() {
    return inject('github')
}

// function setupHrefByUrl(elem, azureUrl, githubUrl) {
//     $(elem).click((event) => {
//         $(elem).addClass('loading');
//         if (DOWNLOAD_SOURCE === 'auto') {
//             getFileUrlFromLocation(azureUrl, githubUrl).then((url) => {
//                 $(elem).attr('href', url);
//                 $(elem).removeClass('loading');
//             })
//         } else if (DOWNLOAD_SOURCE === 'github') {
//             $(elem).attr('href', githubUrl);
//             $(elem).removeClass('loading');
//         } else {
//             $(elem).attr('href', azureUrl);
//             $(elem).removeClass('loading');
//         }
//     });
// }

// function buildByVersion() {
//     $('#version').text(`v${version}`);
//     function setupHref(elem, name) {
//         setupHrefByUrl(elem, getAzureUrl(name), getGithubUrl(name));
//     }

//     setupHref('[win-web]', `xmcl-Web-Setup-${version}.exe`);
//     setupHref('[win-zip]', `xmcl-${version}-win.zip`);
//     setupHref('[win-setup]', `xmcl-Setup-${version}.exe`);
//     setupHref('[mac-zip]', `xmcl-${version}-mac.zip`);
//     setupHref('[dmg]', `xmcl-${version}.dmg`);
//     setupHref('[deb]', `x-minecraft-launcher_${version}_amd64.deb`);
//     setupHref('[snap]', `x-minecraft-launcher_${version}_amd64.snap`);
//     setupHref('[appimage]', `xmcl-${version}.AppImage`);
//     setupHref('[rpm]', `x-minecraft-launcher-${version}.x86_64.rpm`);
// }


// switch (platform.os.family) {
//     case 'Windows':
//         $('[win]').clone().appendTo('[main]');
//         break;
//     case 'OS X':
//         $('[mac]').clone().appendTo('[main]');
//         break;
//     case 'Ubuntu':
//     case 'Debian':
//     case 'SuSE':
//     case 'Fedora':
//     case 'Red Hat':
//         $('[linux]').clone().appendTo('[main]');
//         break;
// }
// buildByVersion();
// buildFromGithub();
