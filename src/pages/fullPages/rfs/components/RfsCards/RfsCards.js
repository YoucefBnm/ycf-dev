import React from 'react';

class CardIcon extends React.Component {
  constructor() {
    super()

    this.state={
      isToggleOn: true,
    }
    this.handleIconClick = this.handleIconClick.bind(this);
  }
  handleIconClick(){
    this.setState({
      isToggleOn: !this.state.isToggleOn
    })
    console.log('clicked');
  }
  render(){
    return (
      <svg className="rfsCards__card-icon" onClick={this.handleIconClick} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
        <path d={this.state.isToggleOn ? 'M11 21c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z M22 21c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z M23.8 5.4c-0.2-0.3-0.5-0.4-0.8-0.4h-16.2l-0.8-4.2c-0.1-0.5-0.5-0.8-1-0.8h-4c-0.6 0-1 0.4-1 1s0.4 1 1 1h3.2l0.8 4.2c0 0 0 0.1 0 0.1l1.7 8.3c0.3 1.4 1.5 2.4 2.9 2.4 0 0 0 0 0.1 0h9.7c1.5 0 2.7-1 3-2.4l1.6-8.4c0-0.3 0-0.6-0.2-0.8zM20.4 14.2c-0.1 0.5-0.5 0.8-1 0.8h-9.7c-0.5 0-0.9-0.3-1-0.8l-1.5-7.2h14.6l-1.4 7.2z' : 'M22.7 3.3c-0.4-0.4-1-0.4-1.4 0l-9.3 9.3-2.3-2.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l3 3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3l10-10c0.4-0.4 0.4-1 0-1.4z M21 11c-0.6 0-1 0.4-1 1v7c0 0.6-0.4 1-1 1h-14c-0.6 0-1-0.4-1-1v-14c0-0.6 0.4-1 1-1h11c0.6 0 1-0.4 1-1s-0.4-1-1-1h-11c-1.7 0-3 1.3-3 3v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-7c0-0.6-0.4-1-1-1z'} />
      </svg>

    );
  }
}

const RobotoCard = () =>{
  return (
    <div className="rfsCards__card">
      <div className="rfsCards__card-header">
        <img className="rfsCards__card-img" src={`https://robohash.org/${Math.random()}?set=set1&size=200x200`} alt="robot" />
        <CardIcon />
      </div>

      <div className="rfsCards__card-footer">
        <h3 className="rfsCards__card-footer-title">roboto</h3>
        <span className="rfsCards__card-footer-price">
          {
            Math.floor(Math.random() * 10000) + 4000 + ' $'
          }
        </span>
      </div>
    </div>
  );
}

const AstroCard = () =>{
  return (
    <div className="rfsCards__card">
      <div className="rfsCards__card-header">
        <img className="rfsCards__card-img" src={`https://robohash.org/${Math.random()}?set=set2&size=200x200`} alt="robot" />
        <CardIcon />
      </div>

      <div className="rfsCards__card-footer">
        <h3 className="rfsCards__card-footer-title">astro</h3>
        <span className="rfsCards__card-footer-price">
          {
            Math.floor(Math.random() * 99000) + 10000 + ' $'
          }
        </span>
      </div>
    </div>
  );
}

const OfficinoCard = () =>{
  return (
    <div className="rfsCards__card">
      <div className="rfsCards__card-header">
        <img className="rfsCards__card-img" src={`https://robohash.org/${Math.random()}?set=set3&size=200x200`} alt="robot" />
        <CardIcon />
      </div>

      <div className="rfsCards__card-footer">
        <h3 className="rfsCards__card-footer-title">officcino</h3>
        <span className="rfsCards__card-footer-price">
          {
            Math.floor(Math.random() * 8500) + 3000 + ' $'
          }
        </span>
      </div>
    </div>
  );
}

const KittyCard = () =>{
  return (
    <div className="rfsCards__card">
      <div className="rfsCards__card-header">
        <img className="rfsCards__card-img" src={`https://robohash.org/${Math.random()}?set=set4&size=200x200`} alt="robot" />
        <CardIcon />
      </div>

      <div className="rfsCards__card-footer">
        <h3 className="rfsCards__card-footer-title">kitty</h3>
        <span className="rfsCards__card-footer-price">
          {
            Math.floor(Math.random() * 5500) + 1500 + ' $'
          }
        </span>
      </div>
    </div>
  );
}
export default () =>{
  return (
    <section className="rfsCards">
      <h2 className="heading--2 rfsCards__heading">you might like</h2>
      <div className="rfsCards__container">
        <RobotoCard />
        <AstroCard />
        <AstroCard />
        <RobotoCard />
        <RobotoCard />
        <OfficinoCard />
        <AstroCard />
        <RobotoCard />
        <OfficinoCard />
        <KittyCard />
        <KittyCard />
        <KittyCard />
        <RobotoCard />
        <RobotoCard />
        <OfficinoCard />
        <KittyCard />
        <KittyCard />
        <AstroCard />
        <OfficinoCard />
        <AstroCard />
      </div>
    </section>
  );
}
