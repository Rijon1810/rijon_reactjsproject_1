import React from "react";
import { NavLink } from "react-router-dom";
import Common from './Common';

const Home = () => {
 const img = "https://source.unsplash.com/500x420?Technology";
  return (
    <>
      <Common name="Grow you business with"
      imgsrc = {img}
      visit='/service'
      btname='Get Started'
     />
    </>
  )
};
export default Home;
