import React, { useRef } from 'react';

export default function Checkbox({
  label,
  value: valueOfCheckbox,
  checked: checkedOfCheckbox = false,
  onChange: onChangeCheckbox = () => {},
}) {
  const forId = useRef(Math.random());
  const onChange = (e) => {
    const { value, checked } = e.target;
    onChangeCheckbox({ value, checked });
  };

  return (
    <>
      <input
        className="checkbox"
        id={forId.current}
        type="checkbox"
        value={valueOfCheckbox}
        defaultChecked={checkedOfCheckbox}
        onChange={onChange}
      />
      <label className="checkbox" htmlFor={forId.current}>{__(label)}</label>
    </>
  );
}
