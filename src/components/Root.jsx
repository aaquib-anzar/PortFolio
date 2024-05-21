import Navbar from "./Navbar";
import Footer from "./Footer";
import {Outlet} from "react-router-dom"
import React from "react"

function Root(){
    return(
        <>
        <Navbar />
        <main>
        <Outlet />
        </main>
        <Footer />
        </>
    )
}
export default Root