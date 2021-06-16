import apiAxios from "shared/apis/apiAxios";

export default function getPlants() {
  return apiAxios.get("/plant/all-my-plants");
}
