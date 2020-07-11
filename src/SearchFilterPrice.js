import React from 'react';
import useFilteredVehicles from './hooks/useFilteredVehicles';
import useQuery from './hooks/useQuery';
import { Select } from './Form';

export default function SearchFilterPrice() {
  const { query, addQuery } = useQuery();
  const { vehicles } = useFilteredVehicles();
  const priceList = vehicles.map(({ Price }) => parseInt(Price));
  const priceListFiltered = priceList
    .filter((Price, index) => priceList.indexOf(Price) === index)
    .sort((a, b) => a - b);
  const priceListMapped = [{ ID: '', Name: '' }].concat(priceListFiltered
    .map((Price, index) => {
      const previousPrice = priceListFiltered[index - 1] || 0;

      return {
        ID: `${previousPrice}_${Price}`,
        Name: ` ${previousPrice ? (`De ${previousPrice}`) : ''} Até R$ ${Price}`,
      };
    }));

  const { Prices = '' } = query;

  const onChange = (PricesUpdated) => {
    addQuery({ Prices: PricesUpdated });
  };

  return (
    <div className="col-3 col-6-sm col-12-smx col-12-smxx">
      <div className="field">
        <Select
          onChange={onChange}
          value={Prices}
          items={priceListMapped}
        >
          Faixa de preço:
        </Select>
      </div>
    </div>
  );
}
