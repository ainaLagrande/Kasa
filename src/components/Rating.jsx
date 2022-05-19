import fullStar from '../assets/fullStar.svg'
import emptyStar from '../assets/emptyStar.svg'

const Rating = (star) => {
    const rate = parseInt(star.rate);
    const difference = 5 - rate;
  
    return (
      <>
        {Array.from(Array(rate), (e,i) => {
          return <img src = {fullStar} alt="etoile positive" key={i}/>
        })}
        {Array.from(Array(difference), (e,i) => {
          return <img src = {emptyStar} alt="etoile negative" key={i}/>
          console.log(i)
        })}
      </>
    );
};

export default Rating;