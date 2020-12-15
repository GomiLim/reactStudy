import React, { Component, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';

export const Chart3 = () => {
  const chartdemo = useRef();
  console.log(chartdemo);

  return (
    <div>
      tutorial
      <a href='https://www.youtube.com/watch?v=c_9c5zkfQ3Y'>Link</a>
    </div>
  );
};

export const MyLine = ({ width, height }) => {
  const data = (canvas) => {
    var ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 30, 0, height);
    gradient.addColorStop(0, 'rgba(208, 235, 255, 1)');
    gradient.addColorStop(1, 'rgba(208, 235, 255, 0)');

    // const gradientStroke = ctx.createLinearGradient(0, 0, 50, 200);
    // gradientStroke.addColorStop(1, 'pink');
    // gradientStroke.addColorStop(0, 'purple');
    return {
      labels: [
        '02:00',
        '04:00',
        '06:00',
        '08:00',
        '10:00',
        '12:00',
        '14:00',
        '16:00',
        '18:00',
        '20:00',
        '22:00',
        '00:00',
      ],
      datasets: [
        {
          backgroundColor: gradient, // Put the gradient here as a fill color
          borderColor: '#d0ebff',
          borderWidth: 2,
          pointColor: '#fff',
          pointStrokeColor: '#d0ebff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: '#d0ebff',
          data: [25.0, 32.4, 22.2, 39.4, 34.2, 22.0, 23.2, 24.1, 20.0, 18.4, 19.1, 17.4],
        },
      ],
    };
  };

  var options = {
    responsive: true,
    datasetStrokeWidth: 2,
    pointDotStrokeWidth: 4,
    scaleLabel: "<%= Number(value).toFixed(0).replace('.', ',') + '°C'%>",
  };

  const divStyle = {
    width: width,
    height: height,
  };

  return (
    <div className='line-chart' style={divStyle}>
      <Line data={data} options={options} />
    </div>
  );
};

// const data = canvas => {
//   const ctx = canvas.getContext('2d');;
//   let gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
//   gradientStroke.addColorStop(0, '#80b6f4');
//   gradientStroke.addColorStop(1, '#f49080');

//   return {
//     // some code ...
//     borderColor: gradientStroke,
//     pointBorderColor: gradientStroke,
//     pointBackgroundColor: gradientStroke,
//     fill: false
//   }
// }
