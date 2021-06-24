import apiAxios from "shared/apis/apiAxios";

export default function getLendingById(trxId) {
  return apiAxios.get(`/rental/lending/${trxId}`);
}
