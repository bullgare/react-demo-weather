import React from 'react';
import {LineChart} from 'react-chartkick';

// @link https://developers.google.com/chart/interactive/docs/gallery/linechart
const Chart = (props) => {
  return (
    <LineChart
        data={props.data}
        width="300px"
        height="150px"
        min={props.min}
        colors={props.colors}
        library={
          {
            crosshair: {trigger: 'both'},
            explorer: {
              axis: 'horizontal',
              keepInBounds: true
            },
            interpolateNulls: true,
            pointSize: 0,
            // theme: 'maximized',
            vAxis: {
              viewWindowMode: 'pretty',
              viewWindow: {
                min: null,
                max: null
              }
            }
          }
        }
        />
  );
}

export default Chart;
