import axios from "axios";
axios.defaults.baseURL = "http://yapi.demo.qunar.com/mock/78108/manager";
export default {
  test() {
    return axios.get("/test");
  },
  number() {
    //取首页的数据
    return axios.get("/number");
  },
  systemnumber() {
    //取首页的表格数据
    return axios.get("/systemnumber");
  },
  queryAdmin() {
    return axios.get("/queryAdmin"); //查询管理员
  }
};
