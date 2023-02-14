import React, { useState } from "react";

import Carousal from "../../../components/carousal/Carousal";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

const RecommendVideos = ({ mediaType, id }) => {
  const { data, loading } = useFetch(`/${mediaType}/${id}/similar`);
  return (
    <div className="carousalSection">
      <ContentWrapper>
        <span className="carousalTitle"> Recommended {mediaType}s</span>
      </ContentWrapper>
      <Carousal data={data?.results} loading={loading} endPoint={mediaType} />
    </div>
  );
};

export default RecommendVideos;
