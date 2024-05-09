import React from "react";
import "./../styles/global.css"
import logoFull from "./../assets/logoFull.png";
import { Link } from "react-router-dom";
import Footer from "./../components/Footer/Footer"

const SignUpOrg = () => {
    return (
        <div className="sign-up-org" style={{ height: "100vh", width: "100vw" }}>
            <div className="d-flex h-100 w-100 justify-content-center align-items-center mx-auto">
                <div className="container p-md-5">
                    <div className="w-md-50 w-100 mx-auto">
                        <form className="form-el mx-auto py-5 d-flex flex-column align-items-center" style={{ boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.1)", borderRadius: "10px" }}>
                            <Link to="/" className="my-3">
                                <img alt="ZWaste" src={logoFull} style={{ borderRadius: "1rem" , width: "40%"}}></img>
                            </Link>
                            <p className="my-2 font-weight-bold" style={{ fontSize: "2rem" }}>Individual Sign Up</p>
                            <input className="border p-2 rounded my-2 input-field" autoComplete="false" placeholder="Name" required></input>
                            <input className="border p-2 rounded my-2 input-field" autoComplete="false" placeholder="Location" required></input>
                            <input className="border p-2 rounded my-2 input-field" autoComplete="false" placeholder="Email" required></input>
                            <input className="border p-2 rounded my-2 input-field" autoComplete="false" placeholder="Password" required></input>
                            <input className="border p-2 rounded my-2 input-field" autoComplete="false" placeholder="Password" required></input>
                            <button className="py-2 input-field rounded border-0 my-2">Sign Up</button>
                            <button className="py-2 input-field rounded border-0 my-2 text-white" style={{ backgroundColor: "#FF4D00" }}>Not an Individual?</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SignUpOrg;

