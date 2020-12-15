import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CheckboxInputBtn = styled.input(({ color, borderColor }) => {
  return `
    display: none;
    &:checked + label {
      color: red;
      border-color: ${borderColor || 'black'};
      color: ${color || 'black'};
    }
  `;
});

const CheckboxLabelBtn = styled.label`
  color: black;
  border: 1px solid black;
`;

const Checkbox = () => {
  const [checkColor, setCheckColor] = useState([]);

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
    if (e.currentTarget.value === 'black') {
      document.querySelectorAll('.items').forEach((element) => {
        element.checked = false;
      });

      return setCheckColor([]);
    }

    if (checkColor.indexOf(e.currentTarget.value) === -1) {
      return setCheckColor([...checkColor, e.currentTarget.value]);
    } else {
      let arrayIdx = checkColor.indexOf(e.currentTarget.value);
      let newArray = [...checkColor];
      newArray.splice(arrayIdx, 1);
      return setCheckColor(newArray);
    }
  };

  useEffect(() => {
    console.log(checkColor);
  });

  return (
    <>
      <div id='color'>
        {colors.map((ele, idx) => {
          return (
            <span key={`colors${idx}`}>
              <CheckboxInputBtn
                type='checkbox'
                name='checkbox-color'
                id={`check-color-${idx}`}
                value={ele.value}
                borderColor={ele.value}
                color={ele.value}
                onClick={selectColor}
                className='items'
              />
              <CheckboxLabelBtn htmlFor={`check-color-${idx}`}>{ele.color}</CheckboxLabelBtn>
            </span>
          );
        })}
      </div>
      <p>
        {checkColor.map((line) => {
          return <span style={{ color: line }}>{line}</span>;
        })}
      </p>
    </>
  );
};

export default Checkbox;
