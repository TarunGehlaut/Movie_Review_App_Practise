import React, { useState } from "react";

import Carousal from "../../../components/carousal/Carousal";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

const Popular = () => {
  const [endPoint, setEndPoint] = useState("movie");
  const { data, loading } = useFetch(`/${endPoint}/popular`);

  const onTabsChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };

  console.log("data", data);
  return (
    <div className="carousalSection">
      <ContentWrapper>
        <span className="carousalTitle">What's Popular</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabsChange={onTabsChange} />
      </ContentWrapper>
      <Carousal data={data?.results} loading={loading} endPoint={endPoint} />
    </div>
  );
};

export default Popular;
