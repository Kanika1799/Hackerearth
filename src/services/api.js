import { create } from "apisauce";

const api = create({
  baseURL: "https://s3-ap-southeast-1.amazonaws.com",
});

export const getSimilarSongs = async (searchTerm) => {
  let similarSongs = [];

  const resp = await api.get("/he-public-data/books8f8fe52.json");
  console.log(resp, "response");
  similarSongs = resp.data.splice(0, 20);
  console.log("similarSongs", similarSongs);
  return similarSongs;
};
