import React from 'react';

import destOne from '../../img/dest-img-1.jpg';
import destTwo from '../../img/dest-img-2.jpg';
import destThree from '../../img/dest-img-3.jpg';

import hotelOne from '../../img/hotel-img-1.jpg';
import hotelTwo from '../../img/hotel-img-2.jpg';
import hotelThree from '../../img/hotel-img-3.jpg';

import restOne from '../../img/rest-img-1.jpg';
import restTwo from '../../img/rest-img-2.jpg';
import restThree from '../../img/rest-img-3.jpg';

import eventOne from '../../img/event-img-1.jpg';
import eventTwo from '../../img/event-img-2.jpg';
import eventThree from '../../img/event-img-3.jpg';

const molTabsContent = [
  {
    title: 'destinations',
    src: [destOne, destTwo, destThree],
    text: 'discover our destinations, from all the continents, desert, sea mountains and islands.'
  },
  {
    title: 'hotels',
    src: [hotelOne, hotelTwo, hotelThree],
    text: 'The booking for a hotel is not painful anymore, luxury hotels, antique hotels, history, and comping outside in the forest.'
  },
  {
    title: 'restaurants',
    src: [restOne, restTwo, restThree],
    text: 'we made a list of restaurants from all over the world, that fit our standards, hygiene service panoramic places.'
  },
  {
    title: 'events',
    src: [eventOne, eventTwo, eventThree],
    text: 'traveling through MOLORAK is not just about booking and reserving, it\'s also about spending good time, attend the scheduled events, from scuba diving, sky diving, festivals, traditional events.'
  }
];

class MolDiscover extends React.Component {
  constructor() {
    super()
    this.state = {
      activeTab: 0,
      content: molTabsContent
    }
    this.handleTabClick = this.handleTabClick.bind(this);
  }
  handleTabClick(index){
    this.setState({
      activeTab: index,
    })
  }
  render(){
    return (
      <section className="molDiscover">
        <h2 className="heading--2 molDiscover__heading">discover</h2>
        <div className="molDiscover__container">
          <p className="molDiscover__intro">
            discover all our services and offers from over 100 countries to each country's most amazing places and hotels and restaurants who fit our standards and the upcoming events and lot lot more, leave the most memorable experience of your life.
          </p>
          <Tab content={this.state.content} click={this.handleTabClick} activeId={this.state.activeTab} />
        </div>
      </section>
    );
  }
}
const Icon = () =>{
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="molDiscover__icon">
      <path d="M10.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-6 6c-0.4 0.4-0.4 1 0 1.4l6 6c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z" />
    </svg>
  );
}
class Tab extends React.Component {
  onHeadingClick(index, event){
    this.props.click(index);
    console.log('click');
  }
  render() {
    let activeClass= this.props.activeId;

    let tabItem = molTabsContent.map((tab, index) =>{
      return (
        <div className="molDiscover__tab">
          <li key={index} className={(activeClass === index ? 'active' : '')}
            onClick={this.onHeadingClick.bind(this, index)}>
              {tab.title}
              <Icon />
            </li>

            <div className={'molDiscover__tab-content ' + (activeClass === index ? 'show' : '')}>
              <div className="molDiscover__tab-imgs">
                {tab.src.map((image, i) =>{
                  return <img key={i} alt="" src={image} />
                })}
              </div>
              <p className="molDiscover__tab-text">{tab.text}</p>
              <a className="btn btn--link" href="/">discover all</a>
            </div>
        </div>
      );
    })
    return <ul className="molDiscover__tabs">{tabItem}</ul>
  }
}
export default MolDiscover
