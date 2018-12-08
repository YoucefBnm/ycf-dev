import React from 'react';
import './_sliderHead.scss';

import BgOne from '../../fullPages/molorak/img/about-img-1.jpg';
import BgTwo from '../../fullPages/molorak/img/hotel-img-2.jpg';
import BgThree from '../../fullPages/molorak/img/event-img-3.jpg';

const slides = [
  {
    src: BgOne,
    title: "change is good",
    text: "same stuff different day, routine anxiety, stress etc... you're about to explode, been there sir. keep everything behind and pack your stuff we'll make you feel good again."

  },
  {
    src: BgTwo,
    title: "wait for what",
    text: "they told you there is seven wonders!! nope with us you'll discover a lot more, they divide the year in four seasons!! we divide the day in four seasons."

  },
  {
    src: BgThree,
    title: "been there",
    text: "you think travel is boring? you've tried it before, the service did not match the ad, not with us our most professional, modest guides who will take to breathtaking places."
  }
];

class Slide extends React.Component {
  render(){
    return (
      <div className="slider" data-active={this.props.active}>
        <img src={this.props.src} alt="" className="slider__bg" />
        <div className="slider__content">
          <h2 className="heading--1 slider__heading">{this.props.title}</h2>
          <p className="slider__text">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

class SliderHead extends React.Component {
  constructor() {
    super()

    this.state = {
      activeSlide: 0,
      interval: 3,
      autoplay: true
    }
    this.pause = this.pause.bind(this);
    this.resume = this.resume.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  componentDidMount(){
    this.timer = setInterval(()=>{
      if (this.state.autoplay) {
        this.next();
      }
    }, this.state.interval * 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }
  pause(){
    console.log('in');
    this.setState({ autoplay: false })
  }
  resume(){
    console.log('out');
    this.setState({ autoplay: true })
  }
  prev(){
    let slide = this.state.activeSlide - 1 < 0 ? slides.length - 1 : this.state.activeSlide - 1;
    this.setState({
      activeSlide: slide
    })
  }

  next(){
    let slide = this.state.activeSlide + 1 < slides.length ? this.state.activeSlide + 1 : 0;
    this.setState({
      activeSlide: slide
    });
  }

  render() {
    return (
      <header className="headerSlide" onMouseEnter={this.pause} onMouseLeave={this.resume}>
        {
          slides.map((slide, index) =>{
            return (
              <Slide
                key={index}
                src={slide.src}
                active={index === this.state.activeSlide}
                title={slide.title}
                text={slide.text}
              />
            );
          })
        }

        <svg onClick={this.prev} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="leftArr">
          <path d="M0 10c0-5.523 4.477-10 10-10s10 4.477 10 10v0c0 5.523-4.477 10-10 10s-10-4.477-10-10v0zM2 10c0 4.418 3.582 8 8 8s8-3.582 8-8v0c0-4.418-3.582-8-8-8s-8 3.582-8 8v0zM10 8h5v4h-5v3l-5-5 5-5v3z" />
        </svg>

        <svg onClick={this.next} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="rightArr">
          <path d="M20 10c0 5.523-4.477 10-10 10s-10-4.477-10-10v0c0-5.523 4.477-10 10-10s10 4.477 10 10v0zM18 10c0-4.418-3.582-8-8-8s-8 3.582-8 8v0c0 4.418 3.582 8 8 8s8-3.582 8-8v0zM10 12h-5v-4h5v-3l5 5-5 5v-3z" />
        </svg>
      </header>
    );
  }
}



export default SliderHead;
