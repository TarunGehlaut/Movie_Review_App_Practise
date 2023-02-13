import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Carousal from "../../../components/carousal/Carousal";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

const Movies = () => {
  const [endPoint, setEndPoint] = useState("day");
  const { data, loading } = useFetch(`/trending/movie/${endPoint}`);

  const navigate = useNavigate();

  const onTabsChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };

  console.log("data", data);

  return (
    <div className="carousalSection">
      <ContentWrapper>
        <span onClick={() => navigate("/explore/tv")} className="carousalTitle">
          Movies
        </span>
        <SwitchTabs data={["Day", "Week"]} onTabsChange={onTabsChange} />
      </ContentWrapper>
      <Carousal data={data?.results} loading={loading} />
    </div>
  );
};

export default Movies;
