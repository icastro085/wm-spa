import React from 'react';
import classNames from 'classnames';
import useModel from './hooks/useModel';

export default function SearchFilterModel() {
  const { model } = useModel();
  let isDisabled = false;

  if (!model.length) {
    isDisabled = true;
  }

  return (
    <div className={classNames('col-3', { disabled: isDisabled })}>
      <div className="field">
        <label>Modelo:</label>
        <select>
          <option key="model-all" value="all">Todos</option>
          {
            model.map(({ ID, Name }) => (
              <option key={`model-${ID}`} value={ID}>{Name}</option>
            ))
          }
        </select>
      </div>
    </div>
  );
}
