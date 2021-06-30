import apiAxios from "shared/apis/apiAxios";

export default function getMyOffer() {
  return apiAxios.get("/rental/my-offer");
}
