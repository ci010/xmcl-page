<template>
  <div id="app">
    <Bar />
    <router-view>
      <Body />
    </router-view>
  </div>
</template>

<script>
import { defineComponent, onMounted, provide, ref } from "@vue/composition-api";
import "./assets/style.css";
import Bar from "./components/Bar.vue";
import Body from "./components/Body.vue";
import { provideGithubInfo, provideArtifacts  } from "./hooks";

export default defineComponent({
  components: {
    Bar,
    Body
  },
  setup() {
    provide("source", ref("auto"));
    const { latest, latestVersion } = provideGithubInfo();
    provideArtifacts(latestVersion, latest);
    onMounted(() => {
      $(document).ready(function() {
        $("body").pagepiling({
          // onLeave: function (index, nextIndex, direction) {
          // },
        });
      });
      $(".menu .item").tab();
      $(".dropdown").dropdown();
    });
  }
});
</script>

<style>
#app {
  height: 100%;
}
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
