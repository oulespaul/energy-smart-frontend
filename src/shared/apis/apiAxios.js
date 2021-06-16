import axios from "axios";

const apiAxios = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im91IiwiaWF0IjoxNjIzODM3NjU2LCJleHAiOjE2MjM4Mzk0NTZ9.p3FEcl6Ntwn_Eao5AiSwDTlwDsubHS-tJctkfDLp3Gk",
  },
});

export default apiAxios;
