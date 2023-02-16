import React from "react";

import Carousal from "../../../components/carousal/Carousal";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

import useFetch from "../../../hooks/useFetch";

const SimilarMovies = ({ mediaType, id }) => {
  const { data, loading } = useFetch(`/${mediaType}/${id}/similar`);

  return (
    <div className="carousalSection">
      <ContentWrapper>
        <span className="carousalTitle">
          Similar {mediaType === "movie" ? mediaType : "TV Show"}s
        </span>
      </ContentWrapper>
      <Carousal data={data?.results} loading={loading} endPoint={mediaType} />
    </div>
  );
};

export default SimilarMovies;
