import React from 'react';

export default function Technologies() {
  return (
    <div
      className='technologies d-flex flex-wrap justify-content-center'
      id='technology'
    >
      <div className='aboutChild'>
        <h3 className='technologiesHeader d-flex justify-content-center'>
          Technologies
        </h3>
        <div className='techIcons d-flex'>
          <i className='fab fa-react'></i>
          <i className='fab fa-js'></i>
          <i className='fab fa-node'></i>
          <i className='fab fa-sass'></i>
          <i className='fab fa-bootstrap'></i>
          <i className='fab fa-git'></i>
          <i className='fab fa-github-square'></i>
          <i className='fab fa-html5'></i>
          <i className='fab fa-css3-alt'></i>
        </div>
      </div>
    </div>
  );
}
