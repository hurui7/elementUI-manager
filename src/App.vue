<template>
  <div id="app">
    <div class="parentDiv">
      <div class="header">
        <router-link to="./"> <div class="word">Admin 1.0</div></router-link>
      </div>
      <div style="height:calc(100% - 48px);;">
        <HelloWorld style="height:100%"></HelloWorld>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  created() {}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  height: 100%;
}
html {
  height: 100%;
}
#app {
  height: 100%;
}
.parentDiv {
  height: 100%;
}
.header {
  width: 100%;
  height: 48px;
  background-color: #1a1b20;
  line-height: 48px;
}
.word {
  color: rgb(253, 252, 252);
  margin-left: 30px;
}
</style>
