import React from 'react';
import ReactIcon from './react';
import JavascriptIcon from './javascript';
import NodeIcon from './node';
import SASS from './sass';
import BootstrapIcon from './bootstrap';
import GitIcon from './git';
import GithubIcon from './github';

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
          <ReactIcon/>
          <JavascriptIcon/>
          <NodeIcon/>
          <SASS/>
          <BootstrapIcon/>
          <GitIcon/>
          <GithubIcon/>
          <GithubIcon className='fab fa-html5'></GithubIcon>
          <i className='fab fa-css3-alt'></i>
        </div>
      </div>
    </div>
  );
}
