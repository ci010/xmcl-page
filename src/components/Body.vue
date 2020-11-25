<template>
  <div id="fullpage">
    <div class="section face">
      <div main class="ui container">
        <a
          class="ui black version label"
          target="_blank"
          href="https://github.com/voxelum/x-minecraft-launcher/releases"
        >
          {{ latestVersion }}
        </a>
        <h1 class="ui inverted header" style="line-height: 1.4; font-size: 3em">
          <div style="font-size: 1.75em; font-weight: bold">
            X Minecraft Launcher
          </div>
          <div style="font-size: 0.75em">KeyStone UI</div>
          <div style="font-size: 0.75em">
            {{ $t("launcher.description") }}
          </div>
        </h1>
      </div>
      <component :is="platform" />
    </div>
    <div class="section intro">
      <div class="ui container">
        <win-32 />
        <mac />
        <linux />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { provideArtifacts, useGithubInfo, usePlatform } from "../hooks";
import Win32 from "./Win32.vue";
import Mac from "./Mac.vue";
import Linux from "./Linux.vue";

export default defineComponent({
  components: {
    Win32,
    Mac,
    Linux
  },
  setup() {
    const { latest, latestVersion } = useGithubInfo();
    provideArtifacts(latest);
    return {
      platform: usePlatform(),
      latestVersion
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
