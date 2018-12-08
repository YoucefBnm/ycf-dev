import React from 'react';
import Logo from '../../img/molorak-logo.png'

export default () =>{
  return (
    <footer className="molFoot">
      <img className="molFoot__logo" src={Logo} alt="logo" />

      <div className="molFoot__container">
        <ul className="molFoot__nav">
          <li class="molFoot__item">
            <a href="/#" class="molFoot__link">company</a>
          </li>
          <li class="molFoot__item">
            <a href="/#" class="molFoot__link">conact</a>
          </li>
          <li class="molFoot__item">
            <a href="/#" class="molFoot__link">carriers</a>
          </li>
          <li class="molFoot__item">
            <a href="/#" class="molFoot__link">privacy</a>
          </li>
          <li class="molFoot__item">
            <a href="/#" class="molFoot__link">terms</a>
          </li>
        </ul>

        <div className="molFoot__copyright">
          <p>Built by <strong>Youcef Bnm</strong>, for the main site <a href="/">ycf-dev.com</a>.
          feel free to use any component of this webpage for your own personal or commercial use,
          through a credit to the original author, <strong>YOUCEF BNM</strong> is appreciated.</p>
        </div>
      </div>
    </footer>
  );
}
