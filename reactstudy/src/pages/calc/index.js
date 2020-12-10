import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Calc = () => {
  const [result, setResult] = useState({
    calc1: 0,
    calc2: 0,
  });
  const parentName = (value) => {
    let pName;
    return (pName = value.target.parentNode.className);
  };
  const increaseButton = (e) => {
    console.log(parentName(e));
    if (result[parentName(e)] >= 10) {
      return false;
    }

    console.log(result);
    console.log(result[parentName(e)]);
    //setResult([result[pName]] < 이렇게 해야 오류 안남)
    // [ ] 안에 넣으면, 계산을 해서 키값으로 반환해줍니다! 변수명, 사칙연산 다 가능!!!!!!
    setResult({
      ...result,
      [parentName(e)]: result[parentName(e)] + 1,
    });
  };
  const decreaseButton = (e) => {
    if (result[parentName(e)] <= 0) {
      return false;
    }

    setResult({
      ...result,
      [parentName(e)]: result[parentName(e)] - 1,
    });
  };
  return (
    <>
      <div className="calc1">
        <button onClick={(e) => increaseButton(e)}> + </button>
        <button onClick={(e) => decreaseButton(e)}> - </button>
        <div>{result.calc1}</div>
      </div>
      <div className="calc2">
        <button onClick={increaseButton}> + </button>
        <button onClick={decreaseButton}> - </button>
        <div>{result.calc2}</div>
      </div>
    </>
  );
};

export default Calc;
