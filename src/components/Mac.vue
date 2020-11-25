<template>
  <div mac>
    <h1 class="ui inverted header" style="line-height: 1.4; font-size: 3em">
      <div id="downloadFor" style="font-size: 0.45em">
        {{ $t("downloadFor.mac") }}
      </div>
    </h1>
    <div class="ui hidden divider" style="padding: 0 0"></div>
    <a
      dmg
      class="ui huge inverted download labeled icon positive button"
      :disabled="!macDmg"
      :href="macDmg"
    >
      <i class="hdd icon"></i>
      <span> {{ $t("download-dmg") }} </span>
    </a>
    <a
      mac-zip
      :disabled="!macZip"
      class="ui huge inverted download labeled icon brown button"
      :href="macZip"
    >
      <i class="box icon"></i>
      <span> {{ $t("download-zip") }} </span>
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