import React from "react";

import { useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import Cast from "./cast/cast";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import RecommendVideos from "./recommendVideos/RecommendVideos";
import SimilarMovies from "./similarVideos/SimilarVideos";

import "./style.scss";
import VideoSection from "./videosSection/VideosSection";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div className="details">
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideoSection data={data} loading={loading} />
      <SimilarMovies id={id} loading={loading} mediaType={mediaType} />
      <RecommendVideos id={id} loading={loading} mediaType={mediaType} />
    </div>
  );
};

export default Details;
