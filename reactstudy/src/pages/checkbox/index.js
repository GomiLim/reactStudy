import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CheckboxInputBtn = styled.input(({color, borderColor}) => {
  return `
    display: none;
    &:checked + label {
      color: red;
      border-color: ${borderColor || "black"};
      color: ${color || "black"};
    }
  `
});


const CheckboxLabelBtn = styled.label`
  color: black;
  border : 1px solid black;
`
 

const Checkbox = () => {
  const [checkColor, setCheckColor] = useState([]);

  const colors = [
    {
      color: '빨강',
      value: 'red'
    },
    {
      color: '노랑',
      value: 'yellow'
    },
    {
      color: '파랑',
      value: 'blue'
    },
    {
      color: '보라',
      value: 'purple'
    },
    {
      color: '초록',
      value: 'green'
    },
    {
      color: '선택없음',
      value: 'black'
    },
  ]
  const selectColor = (e) => {
    setCheckColor([...checkColor, e.currentTarget.value]);
  };

  useEffect(() => {
    console.log(checkColor);
  }, [checkColor]);

  return (
    <>
      <div id="color" >
        {
          colors.map((ele, idx) => {
            return (
              <span key={`colors${idx}`}>
                <CheckboxInputBtn
                type="checkbox"
                name="checkbox-color"
                id={`check-color-${idx}`}
                value={ele.value}
                borderColor={ele.value}
                color={ele.value}
                onClick={selectColor}
              />
              <CheckboxLabelBtn
                htmlFor={`check-color-${idx}`}
              >
                {ele.color}
              </CheckboxLabelBtn>
            </span>
            )
          })
        }
      </div>
      <p>{checkColor ? checkColor : '색깔을 선택해 주세요.'}</p>
    </>
  );
};

export default Checkbox;
