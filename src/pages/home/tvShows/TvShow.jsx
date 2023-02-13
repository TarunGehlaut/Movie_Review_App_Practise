import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import Carousal from "../../../components/carousal/Carousal";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

const TvShows = () => {
  const [endPoint, setEndPoint] = useState("day");

  const { data, loading } = useFetch(`/trending/tv/${endPoint}`);
  const navigate = useNavigate();

  const onTabsChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };

  console.log("data", data);

  return (
    <div className="carousalSection">
      <ContentWrapper>
        <span onClick={() => navigate("/explore/tv")} className="carousalTitle">
          TV Shows
        </span>
        <SwitchTabs data={["Day", "Week"]} onTabsChange={onTabsChange} />
      </ContentWrapper>
      <Carousal data={data?.results} loading={loading} />
    </div>
  );
};

export default TvShows;
