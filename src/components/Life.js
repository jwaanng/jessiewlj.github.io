import React from 'react';
import './Life.css';
import { Link } from 'react-router-dom';
import ImageContain from './ImageContain';

function Life() {
  return (
    <>
    <div className='row'>
        <div className='column'>
            <ImageContain src='Gallery/boat.jpg' description='boat'/>
            <ImageContain src='Gallery/beachhdl.jpg' description='Awenda Park'/>
            <ImageContain src='Gallery/benedict.jpg'/>
            <ImageContain src='Gallery/cat.jpg' description='cats!'/>
            <ImageContain src='Gallery/chcat.jpg' description='miku'/>
            <ImageContain src='Gallery/coco.jpg' description='讨厌coco'/>
        </div>

        <div className='column'>
            <ImageContain src='Gallery/teemo.jpg' description='teemo :c'/>
            <ImageContain src='Gallery/condo.jpg'/>
            <ImageContain src='Gallery/diablo.jpg'/>
            <ImageContain src='Gallery/draw.jpg'/>
            <ImageContain src='Gallery/duck.jpg' description='grilled duck'/>
            <ImageContain src='Gallery/food1.jpg' description='steak!'/>
        </div>

        <div className='column'>
            <ImageContain src='Gallery/origami.jpg'/>
            <ImageContain src='Gallery/preofessional2.jpg'/>
            <ImageContain src='Gallery/rainbow.jpg'/>
            <ImageContain src='Gallery/water.jpg'/>
            <ImageContain src='Gallery/hextech.jpg' description='legendary skin pls'/>
            <ImageContain src='Gallery/professional2.jpg'/>
            <ImageContain src='Gallery/computer.jpg' description='my pc'/>
        </div>
    </div>
    </>
  );
}

export default Life;