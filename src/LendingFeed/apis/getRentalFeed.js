import apiAxios from "shared/apis/apiAxios";

export default function getRentalFeed() {
  return apiAxios.get("/rental/feed");
}
