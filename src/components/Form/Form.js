import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'


class GooglMap extends React.Component {

  render(){
    const MapWithAMarker = withGoogleMap(props =>
   <GoogleMap
     defaultZoom={7}
     defaultCenter={{ lat: 35.69020085, lng: -0.62126486 }}
   >
     <Marker
       position={{ lat: 35.69020085, lng: -0.62126486 }}
     />
   </GoogleMap>
 );
  return(
     <div className="wrap">
       <MapWithAMarker  id="google-map" className="wrap__map"
         containerElement={<div style={{ height: `400px`}} />}
         mapElement={<div style={{height: `100%`, width: `100%`}}/>}
       />
     </div>
   );
  }
}

export default () =>{
  return (
    <section id="contact" className="contact">
      <form className="form">
        <div className="form__group">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="form__icon">
            <path d="M16 14h-8c-2.8 0-5 2.2-5 5v2c0 0.6 0.4 1 1 1s1-0.4 1-1v-2c0-1.7 1.3-3 3-3h8c1.7 0 3 1.3 3 3v2c0 0.6 0.4 1 1 1s1-0.4 1-1v-2c0-2.8-2.2-5-5-5z" />
            <path d="M12 12c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zM12 4c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z" />
          </svg>
          <input type="text" placeholder="enter your name or company name ...." className="input form__input" />
        </div>

        <div className="form__group">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 32 32" className="form__icon">
            <path d="M12 1c-2.9 0-5.7 1.1-7.8 3.2s-3.2 4.9-3.2 7.8c0 6.1 4.9 11 11 11 2.4 0 4.8-0.8 6.7-2.3 0.4-0.3 0.5-1 0.2-1.4s-1-0.5-1.4-0.2c-1.6 1.2-3.5 1.9-5.5 1.9-5 0-9-4-9-9 0-2.4 0.9-4.7 2.6-6.4s4-2.6 6.4-2.6c5 0 9 4 9 9v1c0 1.1-0.9 2-2 2s-2-0.9-2-2v-5c0-0.6-0.4-1-1-1s-1 0.4-1 1v0c-0.8-0.6-1.9-1-3-1-2.8 0-5 2.2-5 5s2.2 5 5 5c1.5 0 2.8-0.7 3.7-1.7 0.7 1 1.9 1.7 3.3 1.7 2.2 0 4-1.8 4-4v-1c0-6.1-4.9-11-11-11zM12 15c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
          </svg>
          <input type="email" placeholder="enter your email" className="input form__input" />
        </div>

        <div className="form__group">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="form__icon">
            <path d="M19 2h-14c-1.7 0-3 1.3-3 3v16c0 0.4 0.2 0.8 0.6 0.9 0.1 0.1 0.3 0.1 0.4 0.1 0.3 0 0.5-0.1 0.7-0.3l3.7-3.7h11.6c1.7 0 3-1.3 3-3v-10c0-1.7-1.3-3-3-3zM20 15c0 0.6-0.4 1-1 1h-12c-0.3 0-0.5 0.1-0.7 0.3l-2.3 2.3v-13.6c0-0.6 0.4-1 1-1h14c0.6 0 1 0.4 1 1v10z" />
          </svg>
          <textarea placeholder="enter your message" className="input form__input" />
        </div>
        <button className="btn form__btn">send</button>
      </form>
      <GooglMap className="google" lat={-34.397} lng={150.644} />
    </section>

  );
}
