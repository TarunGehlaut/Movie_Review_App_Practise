import React, { useState } from "react";
import Carousal from "../../../components/carousal/Carousal";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

const Trending = () => {
  const [endPoint, setEndPoint] = useState("day");

  const { data, loading } = useFetch(`/trending/all/${endPoint}`);

  const onTabsChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };

  console.log("data", data);

  return (
    <div className="carousalSection">
      <ContentWrapper>
        <span className="carousalTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabsChange={onTabsChange} />
      </ContentWrapper>
      <Carousal data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
