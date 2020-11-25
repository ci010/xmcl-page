<template>
  <div id="app">
    <Bar />
    <Body />
  </div>
</template>

<script>
import { defineComponent, onMounted, provide, ref } from "@vue/composition-api";
import "./assets/style.css";
import Bar from "./components/Bar.vue";
import Body from "./components/Body.vue";

export default defineComponent({
  components: {
    Bar,
    Body,
  },
  setup() {
    provide("source", ref("auto"));
    onMounted(() => {
      $(document).ready(function () {
        $("body").pagepiling({
          // onLeave: function (index, nextIndex, direction) {
          // },
        });
      });
      $(".menu .item").tab();
      $(".dropdown").dropdown();
    });
  },
});
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
