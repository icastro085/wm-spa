import React from 'react';

export default function Select({
  value = '',
  items = [],
  onChange = () => {},
  children,
}) {
  const { Name: valueSelected = '' } = items
    .find(({ ID }) => ID === value) || {};

  const onChangeSelect = (ID, Name) => {
    onChange(ID, Name);
  };

  return (
    <>
      <label>{children}</label>
      <input
        onChange={() => {}}
        type="text"
        value={valueSelected}
        className="select"
      />
      <ul>
        {
          items.map(({ ID, Name }) => (
            <li key={`select-item-${ID}`} onClick={() => onChangeSelect(ID, Name)} value={ID}>
              {Name}
            </li>
          ))
        }
      </ul>
    </>
  );
}
