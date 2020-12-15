import React from 'react';

const Checkbox = ({ onChange, checked, id, name, text }) => {
  return (
    <label className='checkbox'>
      <input
        name={name ? name : ''}
        type='checkbox'
        onChange={(e) => onChange(e.target.checked, id)}
        checked={checked}
      />
      <i />
      <span>{text}</span>
    </label>
  );
};

export default React.memo(Checkbox);
