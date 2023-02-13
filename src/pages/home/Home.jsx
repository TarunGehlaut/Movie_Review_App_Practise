import React from "react";

import HeroBanner from "./heroBanner/HeroBanner";
import Movies from "./movies/Movies";
import Trending from "./trending/Trending";
import TvShows from "./tvShows/tvShow";

import "./style.scss";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Movies />
      <TvShows />
    </div>
  );
};

export default Home;
