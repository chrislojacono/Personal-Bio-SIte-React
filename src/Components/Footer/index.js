import React from 'react';

export default function Footer() {
  return (
    <footer class='page-footer'>
      <h3>Follow me on:</h3>
      <div class='footer-icons'>
        <ul>
          <li>
            <a
              href='https://www.linkedin.com/in/chris-lojacono/'
              target='_blank'
              rel='noreferrer'
            >
              <i class='fab fa-linkedin' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/clojacono/'
                target='_blank'
                rel='noreferrer'>
              <i class='fab fa-instagram' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a href='https://github.com/chrislojacono'
                target='_blank'
                rel='noreferrer'>
              <i class='fab fa-github' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/LojaconoChris'
                target='_blank'
                rel='noreferrer'>
              <i class='fab fa-twitter' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a href='mailto: clojacono92@gmail.com'>
              <i class='fa fa-envelope' id='envelope' aria-hidden='true'></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
