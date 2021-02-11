import React from 'react';
import MyResume from '../Resume';

export default function Footer() {
  return (
    <footer className='page-footer'>
      <h3>Follow me on:</h3>
      <div className='footer-icons'>
        <ul>
          <li>
            <a
              href='https://www.linkedin.com/in/chris-lojacono/'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-linkedin' aria-hidden='true'></i>
            </a>
          </li>
          {/* <li>
            <a href='https://www.instagram.com/clojacono/'
                target='_blank'
                rel='noreferrer'>
              <i className='fab fa-instagram' aria-hidden='true'></i>
            </a>
          </li> */}
          <li>
            <a
              href='https://github.com/chrislojacono'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-github' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/LojaconoChris'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fab fa-twitter' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a href='mailto: clojacono92@gmail.com'>
              <i
                className='fa fa-envelope'
                id='envelope'
                aria-hidden='true'
              ></i>
            </a>
          </li>
          <div className="d-flex justify-content-center align-items-center resumeIcon">
            <MyResume />
          </div>
        </ul>
      </div>
    </footer>
  );
}
