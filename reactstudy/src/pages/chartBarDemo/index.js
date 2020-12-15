import React, { useState, useEffect } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';

export const ChartBarLink = () => {
  return (
    <>
      <a href='https://codesandbox.io/s/my1k3k3loy'>두개의 bar</a>
      <a href='https://github.com/reactchartjs/react-chartjs-2/tree/master/example/src/components'>차트 예시~</a>
    </>
  );
};

const options = {
  legend: {
    display: false, // label 숨기기
  },
  scales: {
    yAxes: [
      {
        ticks: {
          min: 0, // 스케일에 대한 최솟갓 설정, 0 부터 시작
          stepSize: 1, // 스케일에 대한 사용자 고정 정의 값
        },
        xAxes: [
          {
            stacked: true,
          },
        ],
        yAxes: [
          {
            stacked: true,
          },
        ],
      },
    ],
  },
  maintainAspectRatio: false, // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
};

const ChartBarDemo = () => {
  const rankArr = [4, 3, 4, 5, 2, 4, 7, 6];
  const rankArr2 = [2, 1, 3, 4, 3, 7, 1, 3];
  // let rankColor = ['#11b288', '#207ac7', '#207ac7', '#207ac7', '#d6d6d6', '#d6d6d6', '#d6d6d6', '#d6d6d6'];
  const data = {
    labels: ['#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8'],
    datasets: [
      {
        backgroundColor: 'pink',
        borderColor: 'pink',
        borderWidth: 1,
        hoverBackgroundColor: 'pink',
        hoverBorderColor: 'pink',
        data: rankArr,
      },
      {
        backgroundColor: '#ffec99',
        borderColor: '#ffec99',
        borderWidth: 1,
        hoverBackgroundColor: '#ffec99',
        hoverBorderColor: '#ffec99',
        data: rankArr2,
      },
    ],
  };

  return (
    <>
      <div>차트입니다.</div>
      <Bar data={data} width={300} height={200} options={options} />
      <ChartBarLink />
    </>
  );
};

export default ChartBarDemo;
