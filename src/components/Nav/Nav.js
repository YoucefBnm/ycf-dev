import React from 'react';
import Logo from '../../img/logo.svg';


const Icon = () =>{
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="nav__icon">
      <path d="M10.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-6 6c-0.4 0.4-0.4 1 0 1.4l6 6c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z" />
    </svg>
  );
}

class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      isToggleOn: true,
     };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      isToggleOn: !this.state.isToggleOn
    })
    console.log('btn clicked');
  }

  render(){
    return (
      <nav className={this.state.isToggleOn ? 'nav' : 'nav open'}>
        <a className="nav__logo" href="/">
          <img src={Logo} alt="logo" />
        </a>

        <ul className={this.state.isToggleOn ? 'nav__navigation' : 'nav__navigation open'}>
          <li className={this.state.isToggleOn ? 'nav__item' : 'nav__item open'}>
            <a className="nav__link" href="/">home</a>
          </li>
          <li className={this.state.isToggleOn ? 'nav__item nav__item--dropdown' : 'nav__item nav__item--dropdown open'}>
            <a className="nav__link" href="javascript:void(0)">pages demo</a>
            <Icon />
            <div className="nav__item nav__item--content">
              <a className="nav__link-second" href="/molorak">travel agency</a>
              <a className="nav__link-second" href="/rfs">e commerce</a>
              <a className="nav__link-second" href="/portfolio">portfolio</a>
            </div>
          </li>
          <li className={this.state.isToggleOn ? 'nav__item nav__item--dropdown' : 'nav__item nav__item--dropdown open'}>
            <a className="nav__link" href="javascript:void(0)">headers demo</a>
            <Icon />
            <div className="nav__item nav__item--content">
              <a className="nav__link-second" href="/slider">slider header</a>
              <a className="nav__link-second" href="/gallery">gallery header</a>
              <a className="nav__link-second" href="video">video header</a>
            </div>
          </li>
          <li className={this.state.isToggleOn ? 'nav__item nav__item--dropdown' : 'nav__item nav__item--dropdown open'}>
            <a className="nav__link" href="javascript:void(0)">other demos</a>
            <Icon />
            <div className="nav__item nav__item--content">
              <a className="nav__link-second" href="/form">form</a>
              <a className="nav__link-second" href="/cards">cards</a>
              <a className="nav__link-second" href="/intro">intro</a>
            </div>
          </li>
        </ul>

        <div className={this.state.isToggleOn ? 'nav__btn' : 'nav__btn close'} onClick={this.handleClick}>
          <div className="nav__btn nav__btn--line" />
          <div className="nav__btn nav__btn--line" />
          <div className="nav__btn nav__btn--line" />
        </div>
      </nav>
    );
  }
}

export default Nav
