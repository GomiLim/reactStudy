import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const RadioInputBtn = styled.input(({ color, borderColor }) => {
  return `
    display: none;
    &:checked + label {
      color: red;
      border-color: ${borderColor || 'black'};
      color: ${color || 'black'};
    }
  `;
});

const RadioLabelBtn = styled.label`
  color: black;
  border: 1px solid black;
`;

const Radio = () => {
  const [radioColor, setRadioColor] = useState('');

  const colors = [
    {
      color: '빨강',
      value: 'red',
    },
    {
      color: '노랑',
      value: 'yellow',
    },
    {
      color: '파랑',
      value: 'blue',
    },
    {
      color: '보라',
      value: 'purple',
    },
    {
      color: '초록',
      value: 'green',
    },
    {
      color: '선택없음',
      value: 'black',
    },
  ];
  const selectColor = (e) => {
    setRadioColor(e.currentTarget.value);
  };

  useEffect(() => {
    console.log(radioColor);
  }, [radioColor]);

  return (
    <>
      <div id='color'>
        {colors.map((ele, idx) => {
          return (
            <span key={`colors${idx}`}>
              <RadioInputBtn
                type='radio'
                name='color'
                id={`color-${idx}`}
                value={ele.value}
                borderColor={ele.value}
                color={ele.value}
                onClick={selectColor}
              />
              <RadioLabelBtn htmlFor={`color-${idx}`}>{ele.color}</RadioLabelBtn>
            </span>
          );
        })}
      </div>
      <p>{radioColor ? radioColor : '색깔을 선택해 주세요.'}</p>
    </>
  );
};

export default Radio;
