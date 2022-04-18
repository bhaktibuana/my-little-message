import React from "react";
import FootNavbar from "../../components/footNavbar";
import Navbar from "../../components/navbar";
import { HomePageContainer } from "./styled";

const HomePage = () => {
  return (
    <>
      <HomePageContainer>
        <Navbar pageName="home" />
        
        <FootNavbar />
      </HomePageContainer>
    </>
  );
};

export default HomePage;
