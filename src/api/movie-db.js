import axios from "axios";

const API_MOVIE = "https://api.themoviedb.org";
const KEY_MOVIE = "30db1237b9167f8afaf9e065b90d16b8";

export const getActorData = async (actor) => {
  try {
    const res = await axios.get(
      `${API_MOVIE}/3/search/person?api_key=${KEY_MOVIE}&language=en-US&query=${actor}&page=1&include_adult=false`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
