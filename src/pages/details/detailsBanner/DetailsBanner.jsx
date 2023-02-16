import dayjs from "dayjs";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "./style.scss";

import PosterFallback from "../../../assets/images/no-poster.png";
import CircleRating from "../../../components/circleRating/CircleRating";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Genres from "../../../components/genres/Genres";
import Img from "../../../components/lazyLoadingImage/Img";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import useFetch from "../../../hooks/useFetch";
import { PlayIcon } from "../playbtn";

const DetailsBanner = ({ video, crew }) => {
  console.log("video", video);
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  console.log("check", data);

  const { url } = useSelector((state) => state.home);

  const _genres = data?.genres?.map((genre) => genre.id);

  const director = crew?.filter((person) => person.job === "Director");
  const writer = crew?.filter(
    (person) => person.job === "Writer" || person.job === "Screenplay"
  );

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="detailsBanner">
      {!loading ? (
        <>
          {!!data && (
            <>
              <div className="backdrop-img">
                <Img src={url.backdrop + data.backdrop_path} />
              </div>
              <div className="opacity-layer"></div>
              <ContentWrapper>
                <div className="content">
                  <div className="left">
                    {data.poster_path ? (
                      <Img
                        src={url.poster + data.poster_path}
                        className="posterImg"
                      />
                    ) : (
                      <Img src={PosterFallback} className="posterImg" />
                    )}
                  </div>
                  <div className="right">
                    <div className="title">
                      {`${data.title || data.name}
                    ( ${dayjs(data.release_date).format("YYYY")})`}
                    </div>
                    <div className="subtitle">{data.tagline}</div>

                    <Genres data={_genres} />

                    <div className="row">
                      <CircleRating rating={data.vote_average.toFixed(1)} />
                      <div
                        className="playbtn"
                        onClick={() => {
                          setShow(true);
                          setVideoId(video.key);
                        }}
                      >
                        <PlayIcon />
                        <span className="text">Watch Trailer</span>
                      </div>
                    </div>

                    <div className="overview">
                      <div className="heading">Overview</div>
                      <p className="description">{data.overview}</p>
                    </div>

                    <div className="info">
                      {data.status && (
                        <div className="infoItem">
                          <span className="text bold">Status: </span>
                          <span className="text">{data.status}</span>
                        </div>
                      )}
                      {data.release_date && (
                        <div className="infoItem">
                          <span className="text bold">Release Date: </span>
                          <span className="text">
                            {dayjs(data.release_date).format("MMM D, YYYY")}
                          </span>
                        </div>
                      )}
                      {data.runtime && (
                        <div className="infoItem">
                          <span className="text bold">Runtime: </span>
                          <span className="text">
                            {toHoursAndMinutes(data.runtime)}
                          </span>
                        </div>
                      )}
                    </div>
                    {director?.length > 0 && (
                      <div className="info">
                        <div className="infoItem">
                          <span className="text bold">Director: </span>
                          <span className="text">
                            {director?.map((d, index) => (
                              <span key={index}>
                                {d.name}
                                {director?.length - 1 !== index && ", "}
                              </span>
                            ))}
                          </span>
                        </div>
                      </div>
                    )}
                    {writer?.length > 0 && (
                      <div className="info">
                        <div className="infoItem">
                          <span className="text bold">Writer: </span>
                          <span className="text">
                            {writer?.map((w, index) => (
                              <span key={index}>
                                {w.name}
                                {writer?.length - 1 !== index && ", "}
                              </span>
                            ))}
                          </span>
                        </div>
                      </div>
                    )}
                    {data?.created_by?.length > 0 && (
                      <div className="info">
                        <div className="infoItem">
                          <span className="text bold">Creaters: </span>
                          <span className="text">
                            {data?.created_by?.map((w, index) => (
                              <span key={index}>
                                {w.name}
                                {data?.created_by?.length - 1 !== index && ", "}
                              </span>
                            ))}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </ContentWrapper>
              <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
              />
            </>
          )}
        </>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
