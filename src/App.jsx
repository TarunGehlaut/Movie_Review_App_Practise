import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import RouterConfig from "./routerConfig/RouterConfig";

import { getAPIConfiguration, getGenres } from "./store/homeSlice";
import { fetchDataFromApi } from "./utils/api";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    ApiTesting();
    genresCall();
  }, []);

  const ApiTesting = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log("res", res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getAPIConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["movie", "tv"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);

    data?.map(({ genres }) => {
      return genres?.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };

  return (
    <div className="App">
      <RouterConfig />
    </div>
  );
}

export default App;
