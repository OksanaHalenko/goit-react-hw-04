import axios from "axios";
const myApiKay = "82NYQkcmlPQG7v48921wcX1z9-VbnvrsVYr3GnDquSE";
axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImageWithTopic = async (topic, page) => {
  const { data } = await axios.get("/search/photos", {
    params: {
      client_id: myApiKay,
      query: topic,
      per_page: 15,
      page,
    },
  });
  return data.results;
};
