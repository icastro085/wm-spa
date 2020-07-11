import React from 'react';
import { Checkbox } from './Form';
import useQuery from './hooks/useQuery';

export default function SearchType() {
  const { query, addQuery } = useQuery();
  const { Type = [] } = query;

  const onChange = ({ value, checked }) => {
    const typeUpdated = Array.isArray(Type) ? [...Type] : [Type];
    const index = typeUpdated.indexOf(value);

    if (!checked) {
      typeUpdated.splice(index, 1);
    } else {
      typeUpdated.push(value);
    }

    addQuery({ Type: [...typeUpdated] });
  };

  return (
    <>
      <div className="col-2 col-4-sm col-6-smx col-6-smxx">
        <Checkbox
          label="search.filters.new"
          value="new"
          checked={Type.indexOf('new') !== -1}
          onChange={onChange}
        />
      </div>
      <div className="col-2 col-4-sm col-6-smx col-6-smxx">
        <Checkbox
          label="search.filters.used"
          value="used"
          checked={Type.indexOf('used') !== -1}
          onChange={onChange}
        />
      </div>
    </>
  );
}
