<template>
  <div>
    <el-col :span="4">2</el-col>
    <el-col :span="20">3</el-col>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
