import React from 'react';
import './banner.css';
import BG1 from '../assets/ARbl.png'

const banner = () => {
  return (
    <div className='banner-container'>
        <header className='banner-header'>
          <div className='word'>
          <h1>FABRICATION OF GUESTED CONTROLLED WHEELCHAIR FOR PARALYZED PEOPLE</h1>
          <p>Diploma Project APR-2021</p>
          </div>
          <div className='image'>
          <img src={BG1} alt="BG"/>
          </div>
        </header>
    </div>
  );
};

export default banner;
