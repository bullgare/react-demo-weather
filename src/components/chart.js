import React from 'react';
import {AreaChart} from 'react-chartkick';

const Chart = (props) => {
  return (
    <AreaChart data={props.data} width="300px" height="150px" min={props.min} colors={props.colors} />
  );
}

export default Chart;
