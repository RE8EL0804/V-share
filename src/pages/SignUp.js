import React from "react";
import Cards from "../components/Cards/Cards";
import Navbar from "./../components/Navbar/Navbar"

const SignUp = () => {
    return(
        <>
          <Navbar />
          <h1 className='sign-up'>SIGN UP</h1>
          <Cards />
        </>
    );
}

export default SignUp;