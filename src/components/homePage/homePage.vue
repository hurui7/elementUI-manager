<template>
  <div class="contanier">
    <div
      style="background: white;height: 40px;line-height: 40px;padding-left: 30px;"
    >
      欢迎管理员，当前时间{{ time }}
    </div>
    <div class="dataMess">
      <div>
        <p class="dataMessWord">数据统计</p>
        <hr />
        <el-row style="height: 90px;line-height: 90px;">
          <el-col :span="6"
            ><div class="grid-content1 bg-purple">
              <el-button :plain="true">今日访问人数:{{ number[0] }}</el-button>
            </div></el-col
          >
          <el-col :span="6"
            ><div class="grid-content2 bg-purple-light bg-purple">
              <el-button :plain="true">今日注册人数:{{ number[1] }}</el-button>
            </div></el-col
          >
          <el-col :span="6"
            ><div class="grid-content3 bg-purple">
              <el-button :plain="true">今日发布文章:{{ number[2] }}</el-button>
            </div></el-col
          >
          <el-col :span="6"
            ><div class="grid-content4 bg-purple-light bg-purple">
              <el-button :plain="true">打开消息提示:{{ number[3] }}</el-button>
            </div></el-col
          >
        </el-row>
      </div>
    </div>
    <div class="systemData">
      <p class="dataMessWord">系统参数</p>
      <hr />
      <template>
        <el-table :data="table" style="width: 100%">
          <el-table-column prop="name" label="属性名" width="300">
          </el-table-column>
          <el-table-column prop="title" label="值"> </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import axios from "../../api";
export default {
  data() {
    return {
      time: "",
      number: Array,
      table: Array
    };
  },
  created() {
    this.time = moment().format("LLL");
    axios
      .number()
      .then(res => {
        this.number = res.data.data;
        return res;
      })
      .catch(error => {
        window.console.log(error);
        return error;
      });
    window.console.log(this.number);
    axios
      .systemnumber()
      .then(res => {
        this.table = res.data.data;
        window.console.log(this.table);
        return res;
      })
      .catch(error => {
        window.console.log(error);
        return error;
      });
    window.console.log(this.number);
  }
};
</script>
<style scoped scope>
.contanier {
  backgroud: #fff;
  padding: 20px;
  height: 100%;
}
.dataMess {
  margin-top: 20px;
  background-color: white;
}
.bg-purple {
  text-align: center;
}
.dataMessWord {
  height: 40px;
  line-height: 40px;
  margin-left: 30px;
}
.systemData {
  margin-top: 20px;
  height: 70%;
  background: #fff;
}
</style>
