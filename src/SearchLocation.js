import React from 'react';
import { Select } from './Form';
import useQuery from './hooks/useQuery';
import useLocation from './hooks/useLocation';

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
  const { location } = useLocation();
  const { query, addQuery } = useQuery();
  const { Radius = '100' } = query;
  const currentLocation = location.state ? `${location.city} - ${location.state}` : '';

  const onChange = (RadiusUpdated) => {
    addQuery({ Radius: RadiusUpdated });
  };

  return (
    <div className="col-6 col-12-sm col-12-smx col-12-smxx group-lx">
      <div className="field col-8 col-12-sm col-12-smx">
        <label className="where">
          <i className="fas fa-map-marker-alt" />
          Onde:
        </label>
        <input
          type="text"
          onChange={() => {}}
          value={currentLocation}
        />
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
