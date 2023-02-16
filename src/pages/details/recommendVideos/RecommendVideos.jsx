import React from "react";

import Carousal from "../../../components/carousal/Carousal";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

import useFetch from "../../../hooks/useFetch";

const RecommendVideos = ({ mediaType, id }) => {
  const { data, loading } = useFetch(`/${mediaType}/${id}/recommendations`);
  return (
    <div className="carousalSection">
      <ContentWrapper>
        <span className="carousalTitle">
          {" "}
          Recommended {mediaType === "movie" ? mediaType : "TV Show"}s
        </span>
      </ContentWrapper>
      <Carousal data={data?.results} loading={loading} endPoint={mediaType} />
    </div>
  );
};

export default RecommendVideos;
