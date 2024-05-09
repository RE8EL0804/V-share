import React from "react"
import FoodCard1 from "../components/FoodCard1"
import FoodCard3 from "../components/FoodCard3"
import FoodCard4 from "../components/FoodCard4"
import FoodCard2 from "../components/FoodCard2"
import logo from "./../assets/logo.png"
import MapChart from "../components/MapComponent"
import { Link } from "react-router-dom";

const Dashboard = () => {

    return (
        <div style={{ Height: "100vh", Width: "100vw" }}> 
            <div className="w-100 py-4 px-4 bg-white d-flex align-items-center justify-content-between flex-md-row flex-column" style={{ top: 0 }}>
                <div className="d-flex">
                    <Link to="/home"><img src={logo} alt="logo" className="mx-4"></img></Link>
                    <p className="my-auto font-weight-bold" style={{ fontSize: "2rem" }}>
                        Dashboard
                    </p>
                </div>
                    <button style={{ borderRadius: 10, border: "1px solid black" }} onclick="/home"><Link to="/home">Home</Link></button>
                
            </div>
            <div className="mx-auto row h-100 w-100">
                <div className="col-md-8 col-12" style={{ minHeight: "fit-content", maxHeight: "100vh" }}>
                <MapChart />
                </div>
                <div className="col-md-4 col-12">
                    <FoodCard4 />
                    <FoodCard1 />
                    <FoodCard2 />
                    <FoodCard3 />
                </div>
            </div>
        </div>
    );
} 

export default Dashboard;