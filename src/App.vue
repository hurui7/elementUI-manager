<template>
  <div id="app">
    <div class="parentDiv">
      <div class="header">
        <div class="word">Admin 1.0</div>
      </div>
      <div style="height:calc(100% - 48px);;">
        <HelloWorld style="height:100%"></HelloWorld>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import axios from "./api/index.js";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  created() {
    axios
      .test()
      .then(function(res) {
        window.console.log(res);
        return res;
      })
      .catch(function(error) {
        window.console.log(error);
        return error;
      });
  }
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
