import React from 'react';
import useFilteredVehicles from './hooks/useFilteredVehicles';
import useQuery from './hooks/useQuery';

const removeYearsDuplicated = (unique, item) => (
  unique.find(({ YearFab, YearModel }) => (
    YearFab === item.YearFab
    && YearModel === item.YearModel
  )) ? unique : [...unique, item]
);

const mapYears = ({ YearFab, YearModel }) => ({
  YearFab,
  YearModel,
});

const sortYears = (a, b) => a.YearFab - b.YearFab;

export default function SearchFilterYear() {
  const { query, addQuery } = useQuery();
  const { vehicles } = useFilteredVehicles();
  const years = vehicles.map(mapYears).sort(sortYears);
  const yearsFiltered = years.reduce(removeYearsDuplicated, []);
  const { Years = '' } = query;

  const onChange = (e) => {
    addQuery({
      Years: e.target.value,
    });
  };

  return (
    <div className="col-3 col-6-sm col-12-smx col-12-smxx">
      <div className="field">
        <label>Ano Desejado:</label>
        <select className="text-right" value={Years} onChange={onChange}>
          <option value="">&nbsp;</option>
          {
            yearsFiltered
              .map(({ YearFab, YearModel }) => (
                <option
                  key={`year-${YearFab + YearModel}`}
                  value={`${YearFab}_${YearModel}`}
                >
                  {YearFab}/{YearModel}
                </option>
              ))
          }
        </select>
      </div>
    </div>
  );
}
