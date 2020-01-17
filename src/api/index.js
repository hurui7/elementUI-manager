import axios from "axios";
export default {
  test() {
    return axios.get("http://yapi.demo.qunar.com/mock/78108/manager/test");
  }
};
