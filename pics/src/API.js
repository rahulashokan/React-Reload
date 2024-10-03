import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID wtkGSWVlsWEcssJBEKMbuo6M7b0LlkXuqkDa6WRWx-Y",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
