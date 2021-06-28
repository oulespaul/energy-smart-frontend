import apiAxios from "shared/apis/apiAxios";

export default function postUploadPlantImage(plantId, file) {
  const form = new FormData();
  form.append("file", file);

  return apiAxios.post(`/plant/upload-image/${plantId}`, form);
}
