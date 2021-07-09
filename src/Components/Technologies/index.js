import React from 'react';
import ReactIcon from './react';
import JavascriptIcon from './javascript';
import SASS from './sass';
import BootstrapIcon from './bootstrap';
import GitIcon from './git';
import GithubIcon from './github';
import HTMLIcon from './html';
import CSS3Icon from './css';
import CSharpIcon from './cSharp';
import MaterialIcon from './materialUi';
import DotNet from './net';
import Netlify from './netlify';

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
          <CSharpIcon/>
          <DotNet/>
          <ReactIcon/>
          <JavascriptIcon/>
          <MaterialIcon/>
          <SASS/>
          <BootstrapIcon/>
          <Netlify/>
          <GitIcon/>
          <GithubIcon/>
          <HTMLIcon/>
          <CSS3Icon/>
        </div>
      </div>
    </div>
  );
}
