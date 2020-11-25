<template>
  <div class="following bar">
    <div class="ui container">
      <div class="ui large inverted secondary network menu">
        <a class="item" href="https://github.com/voxelum/x-minecraft-launcher">
          <i class="github square icon"></i>
          <p data-i18n="repository">
            {{ $t("repository") }}
          </p>
        </a>
        <a class="item" href="https://github.com/ci010">
          <i class="github square icon"></i>
          <p>cijhn@hotmail.com</p>
        </a>
        <div class="right menu">
          <div class="item"></div>
          <div class="ui language floating dropdown link item" id="languages">
            <i class="world icon"></i>
            <div class="text" style="color: white">{{ $t("lang") }}</div>
            <div class="menu">
              <div class="scrolling menu">
                <div class="item" value="zh" @click="$i18n.locale = 'zh'">
                  简体中文
                </div>
                <div class="item" value="en" @click="$i18n.locale = 'en'">
                  English
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="menu">
          <div class="item"></div>
          <div class="ui language floating dropdown link item" id="source">
            <i class="download icon"></i>
            <div class="text" style="color: white" data-i18n="auto-source">
              {{ $t("auto-source") }}
            </div>
            <div class="menu">
              <div class="scrolling menu">
                <div class="item" @click="source = 'auto'">
                  {{ $t("auto-source") }}
                </div>
                <div class="item" @click="source = 'azure'">
                  {{ $t("azure-source") }}
                </div>
                <div class="item" @click="source = 'azure-ms'">
                  {{ $t("azure-ms-source") }}
                </div>
                <div class="item" @click="source = 'baidu'">
                  {{ $t("baidu-source") }}
                </div>
                <div class="item" @click="source = 'github'">
                  {{ $t("github-source") }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { useDownloadSource, useLocale } from "../hooks/index";
export default defineComponent({
  setup() {
    $("#languages").dropdown({});
    return {
      ...useDownloadSource(),
      ...useLocale(),
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.following .bar {
  background-color: #666666;
}
</style>
