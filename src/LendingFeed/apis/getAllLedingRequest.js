import apiAxios from "shared/apis/apiAxios";

export default function getAllLendingRequest() {
  return apiAxios.get('/rental/allLending');
}
