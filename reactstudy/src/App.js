import React, { useRef } from 'react';
import './App.css';

import Calc from './pages/calc';
import Radio from './pages/radio';
import Checkbox from './pages/checkbox';
import LineDemo from './pages/chart2';
import { MyLine } from './pages/chart3';
import { Chart, ChartDoughnut, ChartLine } from './pages/chart';
function App() {
  return (
    <div className='App'>
      {/* <Calc />
      <Radio />
      <Checkbox />
      <Chart />
      <ChartDoughnut />
      <ChartLine />
      <LineDemo /> */}
      <canvas id='chart'></canvas>
      <MyLine width={800} height={400} />
    </div>
  );
}

export default App;
