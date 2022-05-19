import React, { useState } from 'react';
import leftArrow from '../assets/arrow_left.svg'
import rightArrow from '../assets/arrow_rigth.png'

const Caroussel = ({ pictures }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const length = pictures.length
  // Buttons 
  const previous = () => {
    setActiveIndex((index) =>
      index - 1 < 0 ? pictures.length - 1 : index - 1
    );
  };
  const next = () => {
    setActiveIndex((index) =>
      index + 1 > pictures.length - 1 ? 0 : index + 1
    );
  };

  //onClick :
  return (
    <section className="carrousel">
      {length > 1 && (
      <div className={`carrousel__chevronLeft chevron`} onClick={previous}>
        <img src={leftArrow} alt="" />
      </div>
      )}
      <img
        src={pictures[activeIndex]}
        className="carrousel__image"
        alt="cover"
      />
      {length > 1 && (
      <div className={`carrousel__chevronRight chevron`} onClick={next}>
      <img src={rightArrow} alt="" />
        </div>
      )}
      <p className="carrousel__index">
        {activeIndex + 1}/{pictures.length}
      </p>
    </section>
  );
};
export default Caroussel;