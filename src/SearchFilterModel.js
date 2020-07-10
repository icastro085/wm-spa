import React from 'react';
import classNames from 'classnames';
import useModel from './hooks/useModel';
import useVersion from './hooks/useVersion';

export default function SearchFilterModel() {
  const { model } = useModel();
  const { setVersion, getVersion } = useVersion();
  let isDisabled = false;

  if (!model.length) {
    isDisabled = true;
  }

  const onChangeModel = (e) => {
    const ModelID = e.target.value;

    if (ModelID === 'all') {
      setVersion([]);
    } else {
      getVersion({ ModelID: parseInt(ModelID) });
    }
  };

  return (
    <div className={classNames('col-3', { disabled: isDisabled })}>
      <div className="field">
        <label>Modelo:</label>
        <select onChange={onChangeModel}>
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
