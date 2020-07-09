import React, { useRef } from 'react';

export default function Checkbox({ label, value }) {
  const forId = useRef(Math.random());

  return (
    <>
      <input className="checkbox" id={forId.current} type="checkbox" value={value} />
      <label className="checkbox" htmlFor={forId.current}>{label}</label>
    </>
  );
}
