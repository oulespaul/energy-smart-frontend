import apiAxios from "shared/apis/apiAxios";

export default function postCreateOfferConfirm(lendingId, offer) {
  // console.log(lendingId, offer);
  return apiAxios.patch(`/rental/${lendingId}/offer-confirm`, offer);
}
