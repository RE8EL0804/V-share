import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import HeroSection from "./../components/Hero/HeroSection"

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Footer />
        </>
    )
}

export default LandingPage;