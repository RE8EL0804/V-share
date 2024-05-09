import React from "react";
import { Link } from "react-router-dom";

const FoodCard1 = () => {
    return (
        <div style={{ backgroundColor: "#F3F3F3", borderRadius: "10px" }} className="w-100 mb-3 mx-1 px-4 py-3">
            <div className="d-flex flex-column">
                <div className="h-100 d-flex flex-column text-left">
                    <p style={{ fontSize: "1.5rem" }} className="font-weight-bold m-0">Benjarong Hotel</p>
                    <p className="mt-0">
                        <span>Abs</span>
                        <span className="mx-2 my-0" style={{ color: "#5AA33B" }}>|</span>
                        <span>9 km</span>
                    </p>
                </div>
                <Link to="/foodSent">
                    <button className="w-100 text-white border-0 py-2 rounded font-weight-bold" style={{ backgroundColor: "#FF4D00" }}>
                        Send Food Now
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default FoodCard1;