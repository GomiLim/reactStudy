import React, { useState, useCallback } from 'react';

const useCheckbox = (length) => {
  const [form, setForm] = useState([]);
  const onChangeSingle = (checked, id) => {
    console.log(form, checked, id);
    if (checked) {
      setForm([...form, id]);
    } else {
      setForm(form.filter((element) => element !== id));
    }
  };

  const onChangeAll = useCallback((checked) => {
    if (checked) {
      const idArray = Array(length)
        .fill(0)
        .map((_, index) => index);
      setForm(idArray);
    } else {
      setForm([]);
    }
  }, []);
  return [form, onChangeSingle, onChangeAll];
};

export default useCheckbox;
