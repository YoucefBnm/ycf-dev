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

export default GooglMap;
