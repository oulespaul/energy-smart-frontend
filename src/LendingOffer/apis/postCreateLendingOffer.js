import apiAxios from "shared/apis/apiAxios";

export default function postCreateLendingOffer(offer) {
  return apiAxios.post("/rental/offer", offer);
}
