import axios from "axios";
export default axios.create({
  // baseURL: "http://localhost:3000/",
  baseURL: "https://nuiw44pg44.execute-api.ap-northeast-1.amazonaws.com/Prod/",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  },
});
