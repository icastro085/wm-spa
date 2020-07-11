import React from 'react';
import { Select } from './Form';
import useQuery from './hooks/useQuery';
import SearchLocationInput from './SearchLocationInput';

const itemsRadius = [
  {
    ID: '100',
    Name: '100km',
  },
  {
    ID: '500',
    Name: '500km',
  },
  {
    ID: '1000',
    Name: '1000km',
  },
  {
    ID: '2000',
    Name: '2000km',
  },
];

export default function SearchLocation() {
  const { query, addQuery } = useQuery();
  const { Radius = '100' } = query;

  const onChange = (RadiusUpdated) => {
    addQuery({ Radius: RadiusUpdated });
  };

  return (
    <div className="col-6 col-12-sm col-12-smx col-12-smxx group-lx">
      <div className="field col-8 col-12-sm col-12-smx">
        <SearchLocationInput />
      </div>

      <div className="field col-4 col-12-sm col-12-smx">
        <Select
          value={Radius}
          onChange={onChange}
          items={itemsRadius}
        >
          {__('search.filters.radius')}
        </Select>
      </div>
    </div>
  );
}
