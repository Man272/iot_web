import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './page3.css';

const images = [
  { url: "/img/img1.jpg" },
  { url: "/img/img2.jpg" },
  { url: "/img/img3.jpg" },
];

function App() {
  return (
    <div className='page3-container'>
      <div className='line5'>
        <div className='title5'>
          <h1>Result</h1>
          <p>Output in Image</p>
        </div>
      </div>
      <div className='line6'>
        <div className='title6'>
          <SimpleImageSlider
            width={950}
            height={550}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
