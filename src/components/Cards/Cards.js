import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-2.jpg' 
              text='Sign Up as Individual, Restaurants and others'
              label='Sign In'
              path='/signUp/individual'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Sign Up as Organization'
              label='Sign In'
              path='/signUp/nonprofit'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
