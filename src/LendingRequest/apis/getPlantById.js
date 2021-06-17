import apiAxios from "shared/apis/apiAxios";

export default function getPlantById(plantId) {
  return apiAxios.get(`/plant/${plantId}`);
}
