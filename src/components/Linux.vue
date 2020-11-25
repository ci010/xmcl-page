<template>
  <div linux>
    <h1 class="ui inverted header" style="line-height: 1.4; font-size: 3em">
      <div id="downloadFor" style="font-size: 0.45em">
        {{ $t("downloadFor.linux") }}
      </div>
    </h1>
    <div class="ui hidden divider" style="padding: 0 0"></div>
    <a
      deb
      class="ui huge inverted download labeled icon red button"
      :disabled="!deb"
      :href="deb"
    >
      <i class="circle outline icon"></i>
      <span>{{ $t("download-deb") }}</span>
    </a>
    <a
      snap
      class="ui huge inverted download labeled icon teal button"
      :disabled="!snap"
      :href="snap"
    >
      <i class="dolly icon"></i>
      <span>
        {{ $t("download-snap") }}
      </span>
    </a>
    <a
      appimage
      class="ui huge inverted download labeled icon positive button"
      :disabled="!appImage"
      :href="appImage"
    >
      <i class="dolly flatbed icon"></i>
      <span>
        {{ $t("download-appimage") }}
      </span>
    </a>
    <a
      rpm
      class="ui huge inverted download labeled icon button"
      :disabled="!rpm"
      :href="rpm"
    >
      <i class="hdd icon"></i>
      <span>
        {{ $t("download-rpm") }}
      </span>
    </a>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { useArtifacts } from "../hooks";

export default defineComponent({
  setup() { return useArtifacts() }
});
</script>

<style>
</style>