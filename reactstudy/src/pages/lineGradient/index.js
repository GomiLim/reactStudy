import React, { Component, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';

export const LineLink = () => {
  return (
    <div>
      tutorial
      <a href='https://www.youtube.com/watch?v=c_9c5zkfQ3Y'>Link</a>
      example
      <a href='https://github.com/reactchartjs/react-chartjs-2/issues/306'>Link</a>
      api
      <a href='https://www.chartjs.org/docs/latest/axes/labelling.html'>Link</a>
      <a href='https://codesandbox.io/s/zwxo5l6jvl?file=/src/LineDemo.js'>
        https://codesandbox.io/s/zwxo5l6jvl?file=/src/LineDemo.js
      </a>
      <a href='https://gor181.github.io/react-chartjs-2'>https://gor181.github.io/react-chartjs-2</a>
      <a href='http://react-material.fusetheme.com/documentation/third-party-components/react-chartjs-2'>
        http://react-material.fusetheme.com/documentation/third-party-components/react-chartjs-2
      </a>
      <a href='https://codesandbox.io/s/react-chartjs-2-example-gs92u?file=/src/LineDemo.js'>라인 -2개의 데이터</a>
      <a href='https://yeahvely.tistory.com/6'>설명</a>
    </div>
  );
};

const LineGradient = ({ width, height }) => {
  const data = (canvas) => {
    var ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 30, 0, height);
    gradient.addColorStop(0, 'rgba(208, 235, 255, 1)');
    gradient.addColorStop(1, 'rgba(208, 235, 255, 0)');

    const gradientStroke = ctx.createLinearGradient(0, 0, 800, 0);
    gradientStroke.addColorStop(0, '#ffdeeb');
    gradientStroke.addColorStop(1, '#f06595');

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
          label: '블루는 이쁘다',
          backgroundColor: gradient, // Put the gradient here as a fill color
          borderColor: '#d0ebff',
          borderWidth: 2,
          pointColor: '#fff',
          pointStrokeColor: '#d0ebff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: '#d0ebff',
          data: [25.0, 32.4, 22.2, 39.4, 34.2, 22.0, 23.2, 24.1, 20.0, 18.4, 19.1, 17.4],
        },
        {
          label: '분홍은 이쁘다',
          backgroundColor: gradient, // Put the gradient here as a fill color
          fill: false,
          borderColor: gradientStroke,
          borderWidth: 2,
          pointColor: '#fff',
          pointStrokeColor: '#ffdeeb',
          pointHighlightFill: '#fff',
          pointBackgroundColor: '#ffdeeb',
          pointHoverBackgroundColor: '#ffdeeb',
          pointHighlightStroke: '#f06595',
          data: [55.0, 35.4, 50.2, 20.4, 35.2, 40.0, 33.2, 22.1, 35.0, 10.4, 50.1, 25.4],
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
      <LineLink />
    </div>
  );
};

export default LineGradient;
