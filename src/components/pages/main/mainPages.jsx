import React from "react";
import Welcome from "./welcome/Welcome";
import Category from "./category/Category";
import Home from "./home/Home";

const MainPages = () => {
  return (
    <div>
      <Welcome />
      <Home/>
      {/* <Category/> */}
    </div>
  );
};

export default MainPages;
