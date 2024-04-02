import React from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
export default function Root(){
    return (
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}