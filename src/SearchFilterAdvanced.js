import React from 'react';
import { Checkbox } from './Form';
import useFilteredVehicles from './hooks/useFilteredVehicles';
import useQuery from './hooks/useQuery';

export default function SearchFilterAdvanced() {
  const { vehicles } = useFilteredVehicles();
  const { query, addQuery } = useQuery();
  const { Colors = [] } = query;

  const colors = vehicles.map(({ Color }) => Color);
  const colorsFiltered = colors.filter((color, index) => colors.indexOf(color) === index);

  const onChange = ({ value, checked }) => {
    const colorsUpdated = Array.isArray(Colors) ? [...Colors] : [Colors];
    const index = colorsUpdated.indexOf(value);

    if (!checked) {
      colorsUpdated.splice(index, 1);
    } else {
      colorsUpdated.push(value);
    }

    addQuery({ Colors: [...colorsUpdated] });
  };

  return (
    <>
      <div className="col-6 col-12-sm">
        <h4>{__('search.filters.colors')}</h4>
        <hr />

        <div className="row col-12 mt-5">
          {
            colorsFiltered.map((color) => (
              <div className="col-4 col-6-sm mb-5" key={color}>
                <Checkbox
                  label={color}
                  value={color}
                  checked={Colors.indexOf(color) !== -1}
                  onChange={onChange}
                />
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}
