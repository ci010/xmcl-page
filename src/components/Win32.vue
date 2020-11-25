<template>
  <div win>
    <h1 class="ui inverted header" style="line-height: 1.4; font-size: 3em">
      <div style="font-size: 0.45em">
          {{ $t('downloadFor.windows') }}
      </div>
    </h1>
    <div class="ui hidden divider" style="padding: 0 0"></div>
    <a
      win-web
      class="ui huge inverted download labeled icon teal button"
      :disabled="!winWeb"
      :href="winWeb"
    >
      <i class="plane icon"></i>
      <span> {{ $t("download-web") }} </span>
    </a>
    <a
      win-setup
      class="ui huge inverted download labeled icon positive button"
      :disabled="!winNsis"
      :href="winNsis"
    >
      <i class="rocket icon"></i>
      <span> {{ $t('download') }} </span>
    </a>
    <a
      win-zip
      class="ui huge inverted download labeled icon brown button"
      :disabled="!winZip"
      :href="winZip"
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