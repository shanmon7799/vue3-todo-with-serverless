import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:3000/",
  // baseURL: "https://odis5sn9y7.execute-api.ap-northeast-1.amazonaws.com/Prod",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  },
});
