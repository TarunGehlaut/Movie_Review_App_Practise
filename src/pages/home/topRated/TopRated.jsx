import React, { useState } from "react";
import Carousal from "../../../components/carousal/Carousal";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";

const TopRated = () => {
  const [endPoint, setEndPoint] = useState("movie");
  const { data, loading } = useFetch(`/${endPoint}/top_rated`);

  const onTabsChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carousalSection">
      <ContentWrapper>
        <span className="carousalTitle">Top Rated</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabsChange={onTabsChange} />
      </ContentWrapper>
      <Carousal data={data?.results} loading={loading} endPoint={endPoint} />
    </div>
  );
};

export default TopRated;
