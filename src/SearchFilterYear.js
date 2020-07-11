import React from 'react';
import useFilteredVehicles from './hooks/useFilteredVehicles';
import useQuery from './hooks/useQuery';
import { Select } from './Form';

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

const mapYearsLabel = ({ YearFab, YearModel }) => (
  {
    ID: `${YearFab}_${YearModel}`,
    Name: `${YearFab}/${YearModel}`,
  }
);

export default function SearchFilterYear() {
  const { query, addQuery } = useQuery();
  const { vehicles } = useFilteredVehicles();
  const years = vehicles.map(mapYears).sort(sortYears);
  const yearsFiltered = years.reduce(removeYearsDuplicated, []);
  const { Years = '' } = query;
  const yearsMapped = [{ ID: '', Name: '' }].concat(yearsFiltered.map(mapYearsLabel));

  const onChange = (YearsUpdated) => {
    addQuery({ Years: YearsUpdated });
  };

  return (
    <div className="col-3 col-6-sm col-12-smx col-12-smxx">
      <div className="field">
        <Select
          onChange={onChange}
          value={Years}
          items={yearsMapped}
        >
          {__('search.filters.years')}
        </Select>
      </div>
    </div>
  );
}
