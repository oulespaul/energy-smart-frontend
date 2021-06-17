import apiAxios from "shared/apis/apiAxios";

export default function postCreateLendingRequest(plantRequested, volume) {
  const lendingRequest = {
    requestPlantId: plantRequested.id,
    requestVolume: volume,
  };

  return apiAxios.post("/rental/request", lendingRequest);
}
