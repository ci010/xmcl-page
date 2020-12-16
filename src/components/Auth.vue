<template>
  <div class="auth">
    <div class="ui inverted container">
      <div class="icon-container">
        <i class="ui inverted massive windows icon"></i>
        <i class="ui inverted exchange large icon"></i>
        <!-- <i class="ui inverted large teal linkify icon"></i> -->
        <img :src="logo" width="132" height="132" />
      </div>
      <h1 class="ui inverted header" style="line-height: 1.4;">
        <div style="font-size: 1.25em">{{ $t("authSuccess") }}</div>
        <div
          class="ui grey text"
          style="font-size: 0.55em; color: rgb(222 222 222); font-weight: 100; padding-top: 10px"
        >
          {{ $t("authSuccessTitle") }}
        </div>
      </h1>
      <div class="ui horizontal inverted divider" style="margin-bottom: 40px;">
        {{ $t("notWork") }}
      </div>
      <div class="message-container">
        <div class="ui icon positive large message">
          <i style="position: absolute" class="cat icon"></i>
          <div class="content">
            <div class="header">
              {{ $t("redirectHelperTitle") }}
            </div>
            <p>
              {{ $t("redirectHelperMessage") }}
            </p>
            <button
              class="ui teal right labeled icon button"
              @click="openApp"
              draggable
              @dragstart="onDragStart"
            >
              <i class="play icon"></i>
              {{ $t("openInAppButton") }}
            </button>
          </div>
        </div>
        <div
          style="color: rgb(222 222 222);  line-height: 1.4; font-size: 1.4rem; padding-top: 10px"
        >
          {{ $t("nothingWork") }}
        </div>
        <component :is="platform" />
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../assets/logo.png";
import { computed, defineComponent, onMounted } from "@vue/composition-api";
import { usePlatform } from "../hooks";
import Win32 from "./Win32.vue";
import Mac from "./Mac.vue";
import Linux from "./Linux.vue";

export default defineComponent({
  props: { code: String },
  components: {
    Win32,
    Mac,
    Linux
  },
  setup(props) {
    const callbackUrl = computed(
      () => `xmcl://launcher/auth?code=${props.code}`
    );
    const openApp = () => {
      window.location.assign(callbackUrl.value);
    };
    const onDragStart = e => {
      e.dataTransfer.effectAllowed = "copyLink";
      e.dataTransfer.setData("xmcl/url", callbackUrl.value);
    };
    onMounted(() => {
      window.location.assign(callbackUrl.value);
    });
    return {
      platform: usePlatform(),
      logo,
      callbackUrl,
      openApp,
      onDragStart
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.auth {
  text-align: center;
  background: #1b1c1d;
  height: 100%;
  width: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-items: center;
  overflow: auto;
  min-height: 600px;
  min-width: 450px;
}

.message-container {
  padding: 0 15px;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 540px) {
  .message-container {
    padding: 0 0px;
  }

  .icon-container {
    display: none;
  }
}

@media screen and (max-height: 740px) {
  .icon-container {
    display: none;
  }
}
</style>
