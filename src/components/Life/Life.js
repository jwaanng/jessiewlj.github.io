import React from 'react';
import './Life.css';
import { Link } from 'react-router-dom';
import ImageContain from '../ImageContain';

function Life() {
  return (
    <>
    <div className='row'>
        <div className='column'>
            <ImageContain src='Gallery/boat.jpg' description='Tobermory'/>
            <ImageContain src='Gallery/beachhdl.jpg' description='Awenda Park'/>
            <ImageContain src='Gallery/benedict.jpg'/>
            <ImageContain src='Gallery/cat.jpg'/>
            <ImageContain src='Gallery/nobara.png' description='follow my art ig: @ikayobat :)'/>
        </div>

        <div className='column'>
            <ImageContain src='Gallery/teemo.jpg' description='teemo :c'/>
            <ImageContain src='Gallery/condo.jpg'/>
            <ImageContain src='Gallery/diablo.jpg'/>
            <ImageContain src='Gallery/draw.jpg'/>
            <ImageContain src='Gallery/duck.jpg'/>
        </div>

        <div className='column'>
            <ImageContain src='Gallery/origami.jpg'/>
            <ImageContain src='Gallery/rainbow.jpg'/>
            <ImageContain src='Gallery/water.jpg'/>
            <ImageContain src='Gallery/hextech.jpg' description='legendary skin pls'/>
            <ImageContain src='Gallery/professional2.JPG'/>
        </div>

        <div className='column'>
            <ImageContain src='Gallery/chcat.jpg' description='miku'/>
            <ImageContain src='Gallery/coco.jpg' description='讨厌coco'/>
            <ImageContain src='Gallery/food1.jpg' description='steak!'/>
            <ImageContain src='Gallery/computer.jpg' description='my pc'/>
            <ImageContain src='Gallery/pie.jpg' description='pie!'/>
        </div>
    </div>
    </>
  );
}

export default Life;