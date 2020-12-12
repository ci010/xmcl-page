import { ref, onMounted, provide, inject } from '@vue/composition-api';


// /**
//  * @param {string[]} urls 
//  */
// function speedTest(urls) {
//     return Promise.race(urls.map((u) => fetch({ url: u, method: 'HEAD', redirect: 'follow' }).then(() => u)))
// }

export function provideGFW() {
    const inGFW = ref(false);
    onMounted(() => {
        const img = new Image();
        img.onload = () => inGFW.value = false;
        img.onerror = () => inGFW.value = false;

        img.src = "https://www.google.com";

        setTimeout(() => {
            inGFW.value = true;
        }, 1500);
    });
    provide('in-gfw', inGFW)
}

export function useGFW() {
    return { inGFW: inject('in-gfw', ref(false)) }
}
