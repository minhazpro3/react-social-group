import React, { useState } from "react";
import Banner from "../components/Banner";
import Feeds from "../components/Feeds";
import GroupTitle from "../components/GroupTitle";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />

      <Banner />
      <GroupTitle />
      <Feeds />
    </div>
  );
};

export default Home;
