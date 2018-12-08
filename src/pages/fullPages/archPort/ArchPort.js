import React from 'react';

import './archPort.scss';

import ArchNav from './components/ArchNav/ArchNav';
import ArchHead from './components/ArchHead/ArchHead';
import ArchResume from './components/ArchResume/ArchResume';
import ArchPro from './components/ArchPro/ArchPro';
import ArchGal from './components/ArchGal/ArchGal';
import ArchContact from './components/ArchContact/ArchContact';

export default () =>{
  return (
    <div className="wrapper">
      <ArchNav />
      <ArchHead />
      <ArchResume />
      <ArchPro/>
      <ArchGal />
      <ArchContact />
    </div>
  );
}
