import React from 'react';
import './molorak.scss';
import MolHead from './components/MolHead/MolHead';
import MolAbout from './components/MolAbout/MolAbout';
import MolServices from './components/MolServices/MolServices';
import MolDiscover from './components/MolDiscover/MolDiscover';
import MolContact from './components/MolContact/MolContact';
import MolReview from './components/MolReview/MolReview';
import MolFoot from './components/MolFoot/MolFoot';


export default () =>{
  return (
    <React.Fragment>
      <MolHead />
      <MolAbout />
      <MolServices />
      <MolDiscover />
      <MolContact />
      <MolReview />
      <MolFoot />
    </React.Fragment>
  );
}
