import React from 'react';
import './Life.css';
import { Link } from 'react-router-dom';
import ImageContain from '../ImageContain';

function Life() {
  return (
    <>
    <div className='row'>
        <div className='column'>
            <ImageContain src='Gallery/riverdale.jpg' description='Riverdale Park Overpass'/>
            <ImageContain src='Gallery/boat.jpg' description='Tobermory'/>
            <ImageContain src='Gallery/benedict.jpg'/>
            <ImageContain src='Gallery/cat.jpg'/>
            <ImageContain src='Gallery/nobara.png' description='follow my art ig: @ikayobat :)'/>
        </div>

        <div className='column'>
            <ImageContain src='Gallery/tianyoufeng.jpg' description='天游峰 at 武夷山: the tea capital'/>
            {/* <ImageContain src='Gallery/teemo.jpg' description='teemo :c'/> */}
            <ImageContain src='Gallery/condo.jpg'/>
            <ImageContain src='Gallery/food1.jpg' description='steak!'/>
            <ImageContain src='Gallery/pho.jpg' description='Vietnamese food!'/>
        </div>

        <div className='column'>
            <ImageContain src='Gallery/origami.jpg'/>
            <ImageContain src='Gallery/rainbow.jpg'/>
            <ImageContain src='Gallery/water.jpg'/>
            <ImageContain src='Gallery/hextech.jpg' description='legendary skin pls'/>
            <ImageContain src='Gallery/ottawa.jpg' description='pretty view in Ottawa'/>
        </div>

        <div className='column'>
            <ImageContain src='Gallery/htv9.jpg' description='HTV9'/>
            <ImageContain src='Gallery/opensign.jpg' description='Taking pics with my digi!'/>
            <ImageContain src='Gallery/chcat.jpg' description='miku'/>
            <ImageContain src='Gallery/coco.jpg' description='讨厌coco'/>
            <ImageContain src='Gallery/teemodrawing.jpg' description='iykyk'/>
            <ImageContain src='Gallery/computer.jpg' description='my pc'/>
        </div>
    </div>
    </>
  );
}

export default Life;