import React, { useRef } from 'react';
import './App.css';

import Calc from './pages/calc';
import Radio from './pages/radio';
import Checkbox from './pages/checkbox';
import LineDemo from './pages/chart2';
import LineGradient from './pages/lineGradient';
import ChartBarDemo from './pages/chartBarDemo';
import ChartStackedBarDemo from './pages/chartStackedBar';
import ChartDoughnut from './pages/chartDoughnut';
import CheckboxGroup from './pages/checkboxGroup';
function App() {
  return (
    <div className='App'>
      {/* <Checkbox /> */}

      {/* <Calc />
      <Radio />
    
      <ChartDoughnut />
      <ChartLine />
      <LineDemo />*/}
      {/* <canvas id='stChart'></canvas> */}
      {/* <ChartStackedBarDemo /> */}
      {/* <div className='line-gradient'>
        <canvas id='chart'></canvas>
        <LineGradient width={800} height={400} />
      </div> */}
      <CheckboxGroup />
    </div>
  );
}

export default App;
