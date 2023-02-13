import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageNotFound from "../pages/404/PageNotFound";
import Details from "../pages/Details/Details";
import Explore from "../pages/Explore/Explore";
import Home from "../pages/Home/Home";
import SearchResults from "../pages/SearchResults/SearchResults";

import FooterComponent from "../components/Footer/Footer";
import HeaderComponent from "../components/Header/Header";

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
};

export default RouterConfig;
