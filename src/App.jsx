import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import RouterConfig from "./routerConfig/RouterConfig";

import { getAPIConfiguration } from "./store/homeSlice";
import { fetchDataFromApi } from "./utils/api";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    ApiTesting();
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

  return (
    <div className="App">
      <RouterConfig />
    </div>
  );
}

export default App;
