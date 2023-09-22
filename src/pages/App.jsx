import SideBar from "../components/sideBar/SideBar"
import Footer from "../components/footer/Footer"
import Suggestion from "../components/suggestion/Suggestion"
import { createContext, useContext, useState } from "react";
import React from 'react'
import IndexContent from "../components/IndexContent/IndexContent";

export const userDataContext = React.createContext()

function App() {
  const [userName, setUserName] = useState('lu151_')

  return (
    <>
      <userDataContext.Provider value={{userName, setUserName}}>
      <SideBar/>
      <Suggestion/>
      <IndexContent/>
      <Footer/>
      </userDataContext.Provider>
    </>
  )
}

export default App
