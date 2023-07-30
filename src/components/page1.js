import React from 'react';
import './page1.css';
const Page1 = () => {
  const handleButtonClick = () => {
    window.open('https://drive.google.com/file/d/1pxPRJftkijCv1LYSjCi0ppYxLgH9QvzT/view?usp=sharing', '_blank');
  };

  return (
    <div className='page1-container'>
      <div className='line1'>
        <div className='title'>
          <h1>FABRICATION OF GUESTED CONTROLLED WHEELCHAIR FOR PARALYZED PEOPLE</h1>
          <p>Diploma Project APR-2021</p>
          <p>PANIMALAR POLYTECHNIC COLLEGE</p>

           <button className="bttn" onClick={handleButtonClick}>
      <span>Full Report</span>
    </button>
        </div>
      </div>
      <div className='line2'>
        <div className='title2'>
          <div className='header1'>
            <h1>Abstract</h1>
            <p>Nowadays, in India the number of disabled individuals is increasing every year. For patient's mobility aids are useful for transportation and a replacement for walking especially in indoor and outdoor environment as well. Wheelchairs and stretchers are commonly used medical equipment’s for the transportation. There is always an issue faced by the attendant or nurse of transferring the patients from wheelchair to stretcher or to the medical bed. Understanding the various issues regarding the mobility equipment and introducing a better design will be an asset for the medical field for disabled individuals.
              <br/><br/>While the needs of many individuals with disabilities can be satisfied with power wheelchairs, some members of the disabled community find it difficult or impossible to operate a standard power wheelchair. To accommodate this population, several researchers have used technologies originally developed for mobile robots to create “smart wheelchairs” that reduce the physical, perceptual, and cognitive skills necessary to operate a power wheelchair. Normally a power wheelchair contains lots of sensors and laptops for various applications. It leads to more cost on the system. In this project we propose a prototype
              of a smart wheelchair system with low cost and easy control mechanism using RF and MEMS SENSOR wireless Communication.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
