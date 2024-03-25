import "./App.css";
import React from "react";
import PreNavbar from "./Components/PreNavbar";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "./Components/Slider.jsx";
import data from "./Data/data.json";
import Offers from "./Components/Offers.jsx";
import Seprater from "./Components/Seprater.jsx";
import StarProduct from "./Components/StarProduct.jsx";
import StarProductMenu from "./Components/StarProductMenu.jsx";
import MusicAccessories from "./Components/MusicAccessories.jsx";
import ProductReviews from "./Components/ProductReviews.jsx";
import Videos from "./Components/videos.jsx";
import BannerEnd from "./Components/BannerEnd.jsx";
import PreFooter from "./Components/PreFooter.jsx";
import SecondPreFooter from "./Components/SecondPreFooter.jsx";
import MainFooter from "./Components/MainFooter.jsx";
import NavOptions from "./Components/NavOptions.jsx";
import SubFooter from "./Components/SubFooter.jsx";

const start = data.banner.start;
const offer = data.offer;
const StartProductLink = data.starProduct;

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions
        miPhones={data.miPhones}
        redmiPhones={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        fitnessAndLifeStyle={data.fitnessAndLifeStyle}
        home={data.home}
      />
      <Slider start={start} />
      <Offers data={offer} />
      <Seprater text="Star Product" />
      <StarProduct data={StartProductLink} />
      <StarProductMenu />
      <Routes>
        <Route
          path="/music"
          element={
            <MusicAccessories
              hotAccessoriesMusicCover={data.hotAccessoriesCover.music}
              hotAccessoriesMusic={data.hotAccessories.music}
            />
          }
        />
        <Route
          path="/SmartDevice"
          element={
            <MusicAccessories
              hotAccessoriesMusicCover={data.hotAccessoriesCover.smartDevice}
              hotAccessoriesMusic={data.hotAccessories.smartDevice}
            />
          }
        />
        <Route
          path="/Home"
          element={
            <MusicAccessories
              hotAccessoriesMusicCover={data.hotAccessoriesCover.home}
              hotAccessoriesMusic={data.hotAccessories.home}
            />
          }
        />
        <Route
          path="/Lifestyle"
          element={
            <MusicAccessories
              hotAccessoriesMusicCover={data.hotAccessoriesCover.lifeStyle}
              hotAccessoriesMusic={data.hotAccessories.lifeStyle}
            />
          }
        />
        <Route
          path="/MobileAccessories"
          element={
            <MusicAccessories
              hotAccessoriesMusicCover={
                data.hotAccessoriesCover.mobileAccessories
              }
              hotAccessoriesMusic={data.hotAccessories.mobileAccessories}
            />
          }
        />
      </Routes>
      <Seprater text="Product Reviews" />
      <ProductReviews data={data.productReviews} />
      <Seprater text="Videos" />
      <Videos data={data.videos} />
      <Seprater text="In The Press" />
      <BannerEnd data={data.banner.end} />
      <PreFooter />
      <SecondPreFooter />
      <MainFooter data={data.footer} />
      <SubFooter />
    </Router>
  );
}

export default App;
