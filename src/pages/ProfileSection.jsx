import { createContext, useContext, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import MovilHeader from "../components/movilHeader/movilHeader";
import UserContentMovil from "../components/userContentMovil/userContentMovil";
import SideBar from "../components/sideBar/SideBar";
import UserNavigation from "../components/userNavigation/userNavigation";
import React from "react";

export const userDataContext = React.createContext()

const ProfileSection = () => {

  const [userName, setUserName] = useState('lu151_')


  return (
    <>
      <userDataContext.Provider value={{userName, setUserName}}>
        <SideBar />
        <MovilHeader />
        <Header />
        <UserContentMovil/>
        <UserNavigation/>
        <Footer />
      </userDataContext.Provider>
    </>
  );
};

export default ProfileSection;
