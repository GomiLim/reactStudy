import React from 'react';
import Checkbox from '../../components/checkComponent';
import { useCheckbox } from '../../hooks/useCheckbox';

const CheckboxGroup = () => {
  const checkboxArray = [
    { name: 'checkbox-agree', text: '(필수) 만14세 이상입니다' },
    { name: 'checkbox-agree', text: '(필수) 서비스 이용약관에 동의' },
    { name: 'checkbox-agree', text: '(필수) 개인정보 수집에 동의' },
    { name: 'checkbox-agree', text: '(선택) 홍보 및 마케팅 이용에 동의' },
  ];
  const [checkboxItem, handleSingleCheck, handleAllCheck] = useCheckbox(checkboxArray.length);
  console.log(checkboxItem);
  return (
    <>
      <Checkbox
        onChange={handleAllCheck}
        checked={checkboxItem.length === checkboxArray.length}
        text='약관에 모두 동의'
      />
      {checkboxArray.map((element, index) => (
        <Checkbox
          onChange={handleSingleCheck}
          checked={checkboxItem.includes(index)}
          text={element.text}
          id={index}
          key={element.text}
        />
      ))}
    </>
  );
};

export default CheckboxGroup;
