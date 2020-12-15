import React, { useState, useEffect } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';

const options = {
  legend: {
    display: false, // label 숨기기
  },
  scales: {
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
  maintainAspectRatio: false, // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
};

const ChartStackedBarDemo = () => {
  const rankArr = [4, 3, 4, 5, 2, 4, 7, 6];
  const rankArr2 = [2, 1, 3, 4, 3, 7, 1, 3];
  const rankArr3 = [2, 1, 3, 4, 3, 7, 1, 3];
  let rankColor1 = ['#ffdeeb', '#fcc2d7', '#faa2c1', '#f783ac', '#f06595', '#e64980', '#d6336c', '#c2255c'];
  let rankColor2 = ['#99e9f2', '#66d9e8', '#3bc9db', '#22b8cf', '#15aabf', '#1098ad', '#0c8599', '#0b7285'];
  const data = {
    labels: ['#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8'],
    datasets: [
      {
        backgroundColor: rankColor1,
        borderColor: rankColor1,
        borderWidth: 1,
        hoverBackgroundColor: rankColor1,
        hoverBorderColor: rankColor1,
        data: rankArr,
      },
      {
        backgroundColor: rankColor2,
        borderColor: rankColor2,
        borderWidth: 1,
        hoverBackgroundColor: rankColor2,
        hoverBorderColor: rankColor2,
        data: rankArr2,
      },
      {
        backgroundColor: rankColor2,
        borderColor: rankColor2,
        borderWidth: 1,
        hoverBackgroundColor: rankColor2,
        hoverBorderColor: rankColor2,
        data: rankArr3,
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

export default ChartStackedBarDemo;
