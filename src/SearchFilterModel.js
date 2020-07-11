import React, { useEffect } from 'react';
import classNames from 'classnames';
import useModel from './hooks/useModel';
import useQuery from './hooks/useQuery';
import { Select } from './Form';

export default function SearchFilterModel() {
  const { model, getModel, setModel } = useModel();
  const {
    query: {
      MakeID: MakeIDQuery = '',
      ModelID: ModelIDQuery = '',
    },
    addQuery,
  } = useQuery();
  const initialList = [{ ID: '', Name: __('search.filters.model-all') }];

  let isDisabled = false;

  if (!model.length) {
    isDisabled = true;
  }

  const onChangeModel = (ModelID) => {
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
    <div className={classNames('col-3 col-6-sm col-12-smx col-12-smxx', { disabled: isDisabled })}>
      <div className="field">
        <Select
          onChange={onChangeModel}
          value={ModelIDQuery ? parseInt(ModelIDQuery) : ModelIDQuery}
          items={initialList.concat(model)}
        >
          {__('search.filters.model')}
        </Select>
      </div>
    </div>
  );
}
