import axios from "axios";

const apiAxios = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im91IiwiaWF0IjoxNjIzODUyMjUxLCJleHAiOjE2MjM4NTQwNTF9.3ZQPsSRgpha1UjHA07uGDh3C-RYBCRP2UPH4viA6USU",
  },
});

export default apiAxios;
