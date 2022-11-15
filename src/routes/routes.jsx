import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { UseAuthContext } from "../contexts/authUserContext";
import Images from "../pages/imagesPage/Images";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/register/Register";

const RoutesPage = () => {

  const { isLogged } = UseAuthContext();

  return (
    <BrowserRouter>
      {isLogged && <NavBar />}
      <Routes>
        <Route path="/" element={isLogged === true ? <Navigate to='/home' /> : <Register />} />
        <Route path="/login" element={isLogged === true ? <Navigate to='/home' /> : <Login />} />
        <Route path="/home" element={isLogged === true && <Home />} />
        <Route path="/Images" element={isLogged === true && <Images />} />
        <Route path="/profile" element={isLogged === true && <Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesPage;