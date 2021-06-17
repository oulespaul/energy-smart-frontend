import axios from "axios";

const apiAxios = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im91IiwiaWF0IjoxNjIzOTAzNjEyLCJleHAiOjE2MjM5MDU0MTJ9.-Mx_aXc5viO3PeneE4NkoMbSc5IX92hIhrlvyGEz6kA",
  },
});

export default apiAxios;
