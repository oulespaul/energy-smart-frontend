import apiAxios from "shared/apis/apiAxios";

export default function getHistory() {
  return apiAxios.get("rental/history");
}
