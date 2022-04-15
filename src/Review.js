import React, { useState } from 'react';
import reviews from './data';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];
  
  const checkIndex = (index) => {
    if (index > reviews.length - 1) {
      return 0;
    }
    if (index < 0) {
      return reviews.length - 1;
    }
    
    return index;
  };
  
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkIndex(randomNumber))
  };
  const prevPerson = () => {
    setIndex((index) => {
      let prevIndex = index - 1;
      return checkIndex(prevIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  return (
    <article>
      <div className='img-container'>
        <img src={image} alt='' className='person-img' />
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          Previous Review
        </button>
        <button className='next-btn' onClick={nextPerson}>
          Next Review
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        Random Review
      </button>
    </article>
  );
};

export default Review;
