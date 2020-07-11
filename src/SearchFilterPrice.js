import React from 'react';
import useFilteredVehicles from './hooks/useFilteredVehicles';
import useQuery from './hooks/useQuery';

export default function SearchFilterPrice() {
  const { query, addQuery } = useQuery();
  const { vehicles } = useFilteredVehicles();
  const priceList = vehicles.map(({ Price }) => parseInt(Price));
  const priceListFiltered = priceList
    .filter((Price, index) => priceList.indexOf(Price) === index)
    .sort((a, b) => a - b);

  const { Prices = '' } = query;

  const onChange = (e) => {
    addQuery({
      Prices: e.target.value,
    });
  };

  return (
    <div className="col-3 col-6-sm col-12-smx col-12-smxx">
      <div className="field">
        <label>Faixa de preço:</label>
        <select className="text-right" value={Prices} onChange={onChange}>
          <option value="">&nbsp;</option>
          {
            priceListFiltered
              .map((Price, index) => {
                const previousPrice = priceListFiltered[index - 1] || 0;

                return (
                  <option
                    key={`year-${Price}`}
                    value={`${previousPrice}_${Price}`}
                  >
                    {
                      previousPrice
                        ? (`De R$ ${previousPrice}`)
                        : ''
                    } Até R$ {Price}
                  </option>
                );
              })
          }
        </select>
      </div>
    </div>
  );
}
