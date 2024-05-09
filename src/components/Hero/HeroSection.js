import React from 'react';
import './HeroSection.css';
import gif from "./../../assets/images/img-home.gif"
import {Button} from "./../Button/Button"

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={gif} autoPlay loop muted />
      <h1>HELP-NEEDY</h1>
    <p>
      <h1>SHARE FOOD</h1></p>
      <div className='hero-btns d-flex flex-column'>
       
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          path="/signUp"
        >
          LET'S HELP <i className='far fa-play-circle' />
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
          path="/dashboard/organisation"
        >
          OUR DASHBOARD <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
