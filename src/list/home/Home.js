
import Footer from "../../components/footer";
import Card from "./Card";
import ImgTxt from "./ImgTxt";
import NavImg from "./NavImg";
import Review from "./Review";
import Facilities from "./Facilities";
import History from "./History";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate('/discover');
  };
  const navigateToAbout1 = () => {
    navigate('/blog');
  };
  return (
    <>
      <NavImg navigateToAbout={navigateToAbout} navigateToAbout1={navigateToAbout1}></NavImg>
      <History></History>
      <div>
      <h1 className="text-customBrown text-center font-bold text-3xl py-20">Discover the best Hotels</h1>
        <Card></Card>
      </div>
      <br></br>
      
      <br></br>
      <ImgTxt></ImgTxt>
      <Facilities />
      <Review></Review>
      <Footer></Footer>
    </>
  );
};
export default Home;
