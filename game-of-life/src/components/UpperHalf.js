import React from 'react';

const UpperHalf = () => {
    return (
      <React.Fragment>
        <section className='upper-left'>
          <h1 className='page-title'>Context API With Hooks!</h1>
        </section>

        <section className='upper-right-a'>
          <span className='byline a'>Made by <br/>Chunyu Kuo</span>
          <span className='byline b'>Inspired by <br/>John Conway</span>
        </section>

        <section className='upper-right-b'>
          <span className='華語版本'>換成中文</span>
          <span className='english'>English</span>
        </section>
      </React.Fragment>
    );
};

export default UpperHalf;
