import React from 'react';
import './../App.css';
import Navbar from "./../components/Navbar/Navbar"
import Footer from "./../components/Footer/Footer"


const Services = () => {
  return (
    <>
     <Navbar />
     <div className='services'>
     <h1 >LET'S NOT WASTE FOOD</h1>
     <p  style={{fontSize:'20px'}}>Every year fifty thousand crore rupees of food grains are wasted. In a world where millions of people do not have food to eat properly, what story tells the destruction of such grains?

On the one hand, the remaining food of the night is thrown away daily as stale, on the other hand there are some people who do not eat even for a while and are starving. It is the story of almost every developed and developing country. The common man is troubled by inflation, the prices of food items are skyrocketing, but the government is not sure why the government does not release it in the open market when there is large stock of food grains. Even though rats eat grains in warehouses, grains keep moist and rot in water.

Therefore a proper policy is needed to be executed so that food wastage can be prevented. Every person should be responsible and duty-bound to investigate this burning problem to provide food security to all.</p></div>
<Footer />
    </>
  );
}

export default Services
