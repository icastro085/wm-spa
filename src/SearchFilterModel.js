import React, { useEffect } from 'react';
import classNames from 'classnames';
import useModel from './hooks/useModel';
import useQuery from './hooks/useQuery';

export default function SearchFilterModel() {
  const { model, getModel, setModel } = useModel();
  const {
    query: {
      MakeID: MakeIDQuery,
      ModelID: ModelIDQuery,
    },
    addQuery,
  } = useQuery();

  let isDisabled = false;

  if (!model.length) {
    isDisabled = true;
  }

  const onChangeModel = (e) => {
    const ModelID = e.target.value;
    addQuery({ ModelID });
  };

  useEffect(() => {
    if (!MakeIDQuery) {
      setModel([]);
      addQuery({ ModelID: null });
    } else if (MakeIDQuery) {
      getModel({ MakeID: parseInt(MakeIDQuery) });
    }
  }, [MakeIDQuery]);

  return (
    <div className={classNames('col-3', { disabled: isDisabled })}>
      <div className="field">
        <label>Modelo:</label>
        <select onChange={onChangeModel} value={ModelIDQuery}>
          <option key="model-all" value="">Todos</option>
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
