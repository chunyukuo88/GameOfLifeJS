import React from 'react';

const UpperHalf = () => {
    return (
      <React.Fragment>
        <section className='upper-left'>
          <h1 className='page-title'>The Splendid Maths</h1>
        </section>

        <section className='upper-right-a'>
          <span className='byline-a'>By Chunyu Kuo</span>
          <span className='byline-b'>Inspired by John Conway</span>
        </section>

        <section className='upper-right-b'>
          <span className='華語版本'>華語版本</span>
          <span>English</span>
        </section>
      </React.Fragment>
    );
};

export default UpperHalf;