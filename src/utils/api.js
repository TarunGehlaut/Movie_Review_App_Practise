import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"; //Base Pi Url

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN; //token

// headers:
const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

// fetch data
export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = axios.get(BASE_URL + url, {
      headers,
      params,
    });

    return data;
  } catch (error) {
    console.log("[ERROR]:", error);
    return error;
  }
};
