import React, { useState, useEffect } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';

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
      },
    ],
  },
  maintainAspectRatio: false, // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
};

export const Chart = () => {
  const rankArr = [4, 3, 4, 5, 2, 4, 7, 6];
  // let calculatedArr = [0, 0, 0, 0, 0, 0, 0, 0];
  // rankArr.forEach((item) => console.log(calculatedArr[item - 1]++));
  let rankColor = ['#11b288', '#207ac7', '#207ac7', '#207ac7', '#d6d6d6', '#d6d6d6', '#d6d6d6', '#d6d6d6'];

  const data = {
    labels: ['#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8'],
    datasets: [
      {
        backgroundColor: rankColor,
        borderColor: rankColor,
        borderWidth: 1,
        hoverBackgroundColor: rankColor,
        hoverBorderColor: rankColor,
        data: rankArr,
      },
    ],
  };

  return (
    <>
      <div>차트입니다.</div>
      <Bar data={data} width={300} height={200} options={options} />
    </>
  );
};

const expData = {
  labels: ['긍정적', '부정적', '보통'],
  datasets: [
    {
      labels: ['긍정적', '부정적', '보통'],
      data: [60, 13, 27],
      borderWidth: 2,
      hoverBorderWidth: 3,
      backgroundColor: ['rgba(238, 102, 121, 1)', 'rgba(98, 181, 229, 1)', 'rgba(255, 198, 0, 1)'],
      fill: true,
    },
  ],
};

export const ChartDoughnut = () => {
  return (
    <Doughnut
      options={{
        legend: {
          display: true,
          position: 'right',
        },
      }}
      data={expData}
      height={120}
    />
  );
};

export const ChartLine = () => {
  return (
    <>
      <a href='https://codesandbox.io/s/zwxo5l6jvl?file=/src/LineDemo.js'>
        https://codesandbox.io/s/zwxo5l6jvl?file=/src/LineDemo.js
      </a>
      <a href='https://gor181.github.io/react-chartjs-2'>https://gor181.github.io/react-chartjs-2</a>
      <a href='http://react-material.fusetheme.com/documentation/third-party-components/react-chartjs-2'>
        http://react-material.fusetheme.com/documentation/third-party-components/react-chartjs-2
      </a>
      <a href='https://codesandbox.io/s/react-chartjs-2-example-gs92u?file=/src/LineDemo.js'>라인 -2개의 데이터</a>
    </>
  );
};

export const ChartBar = () => {
  return (
    <>
      <a href='https://codesandbox.io/s/my1k3k3loy'>두개의 bar</a>
    </>
  );
};
