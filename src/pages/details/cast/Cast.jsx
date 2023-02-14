import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useSelector } from "react-redux";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadingImage/Img";

import avatar from "../../../assets/images/avatar.png";

import "./style.scss";
const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);
  const profileContainer = useRef();

  const navigation = (dir) => {
    const container = profileContainer.current;
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 10)
        : container.scrollLeft + (container.offsetWidth + 10);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const skeletonItem = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className="castSection">
      <ContentWrapper>
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRightNav arrow"
          onClick={() => navigation("right")}
        />
        <div className="sectionHeading">Top Cast</div>
        {!loading ? (
          <div ref={profileContainer} className="listItems">
            {data?.map((item) => {
              const imgURl = item.profile_path
                ? url.profile + item.profile_path
                : avatar;

              return (
                <div key={item.id} className="listItem">
                  <Img src={imgURl} className="profileImg" />
                  <div className="name">{item.name}</div>
                  <div className="character">{item.character}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="castSkeleton">
            {skeletonItem()}
            {skeletonItem()}
            {skeletonItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Cast;
