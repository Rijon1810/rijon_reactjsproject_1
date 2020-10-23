import React from "react";
import { NavLink } from "react-router-dom";
import Common from './Common';

const About = () => {
const img = "https://picsum.photos/id/1026/500/400";
  return (
    <>
      <Common name=" Welcome to About Page"
      imgsrc = {img}
      visit='/contact'
      btname='Contact Now'
     />
    </>
  );
};
export default  About;
