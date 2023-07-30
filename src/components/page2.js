import React from 'react';
import './page2.css';
import img1 from '../assets/ARDUINO.png'
import img2 from '../assets/EMBEDDED.png'
import img7 from '../assets/System.png'

const Page2 = () => {
  return (
    <div className='page2-container'>
      <div className='line4'>
        <div className='title4'>
          <div className='text-center'>
            <h1>BLOCK DIAGRAM</h1>
            <img src={img7} alt="SYSTEM"/>
          </div>
        </div>
      </div>
      <div className='line3'>
        <div className='title3'>
          <div className='text-center'>
            <h1>Software Used</h1>
          </div>
          <div className='box1'>
            <div className='su-container'>
            <div className='SU'>
              <img src={img1} alt="Ganache"/>
              <h5>ARDUINO_IDE</h5>
            </div>
            </div>
          </div>
          <div className='box1'>
            <div className='su-container'>
            <div className='SU'>
              <img src={img2} alt="MetaMask"/>
              <h5>EMBEDDED C</h5>
            </div>
            </div>
          </div>
        </div>
        <div className='title8'>
          <div className='text-center'>
            <h1>HARDWARE Used</h1>
          </div>
          <div className='box2'>
            <p>Power supply</p>
            <p>Arduino uno</p>
            <p>RF transmitter and receiver</p>
            <p>Relay board</p>
            <p>Dc motor</p>
            <p>Arduino nano</p>
            <p>Mems sensor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
