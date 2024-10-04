import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID VUXAnobeEjj_S5uGv05c4n_Rt_Xs8yHbw9JOqF8cUxM",
    },
    params: {
      query: "car",
    },
  });
  console.log(response);
  return response.data.results;
};

export default searchImages;
