import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";

import { Link, useLocation, useNavigate } from "react-router-dom";

import "./style.scss";

import logo from "../../assets/images/movix-logo.svg";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const homeNavigateHandler = () => {
    navigate("/");
    setTimeout(() => {
      setMobileMenu(false);
    }, 100);
  };

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 500);
    }
  };

  const openSearch = () => {
    setShowSearch(true);
    setMobileMenu(false);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo" onClick={homeNavigateHandler}>
          <img src={logo} alt="movix-logo" />
        </div>

        <nav>
          <ul className="menuItems">
            <li className="menuItem">
              {
                <Link
                  onClick={() => setMobileMenu(false)}
                  to="/explore/movie"
                  className="menuLink"
                >
                  Movies
                </Link>
              }
            </li>
            <li className="menuItem">
              <Link
                onClick={() => setMobileMenu(false)}
                to="/explore/tv"
                className="menuLink"
              >
                TV Shows
              </Link>
            </li>
            <li className="menuItem">
              <HiOutlineSearch onClick={openSearch} />
            </li>
          </ul>

          <div className="mobileMenuItems">
            <HiOutlineSearch onClick={openSearch} />
            {mobileMenu ? (
              <VscChromeClose onClick={() => setMobileMenu(false)} />
            ) : (
              <SlMenu onClick={openMobileMenu} />
            )}
          </div>
        </nav>
      </ContentWrapper>

      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                onKeyUp={searchQueryHandler}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search for a movie or TV show.."
              />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
