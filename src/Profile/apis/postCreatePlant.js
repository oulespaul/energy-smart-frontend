import apiAxios from "shared/apis/apiAxios";

export default function postCreatePlant(plant) {
  return apiAxios.post("/plant/create", plant);
}
