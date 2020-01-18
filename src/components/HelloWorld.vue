<template>
  <div>
    <el-col :span="4" style="height:100%;background:#1a1b20"
      ><bar></bar
    ></el-col>
    <el-col :span="20" style="height:100%;background-color:#eee">
      <router-view></router-view>
    </el-col>
  </div>
</template>

<script>
import bar from "./commom/bar.vue";
export default {
  components: {
    bar
  },
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
