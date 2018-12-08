import React from 'react';
import './rfs.scss';

import RfsHead from './components/RfsHead/RfsHead';
import RfsTrend from './components/RfsTrend/RfsTrend';
import RfsCards from './components/RfsCards/RfsCards';

export default () =>{
  return (
    <React.Fragment>
      <RfsHead />
      <RfsTrend />
      <RfsCards />
    </React.Fragment>
  );
}
