import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Here are some snippets of my life!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='professional.jpg'
              text='eat eat'
              label='Python'
              path=''
            />
            <CardItem
              src='professional2.jpg'
              text='Uoft Guesser'
              label='MERN'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='professional3.jpg'
              text='Escape from LOL'
              label='Godot'
              path='/'
            />
            <CardItem
              src='professional4.jpg'
              text='Pet Finder!'
              label='Java'
              path='/'
            />
            <CardItem
              src='images/img-8.jpg'
              text='This personal website'
              label='React'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;