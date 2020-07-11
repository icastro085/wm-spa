import React, { useState } from 'react';
import classNames from 'classnames';
import useQuery from './hooks/useQuery';
import useFilteredVehicles from './hooks/useFilteredVehicles';
import SearchFilterAdvanced from './SearchFilterAdvanced';

export default function SearchActions() {
  const {
    vehicles,
    gePage,
    setVehicles,
    isLoadingVehicles,
  } = useFilteredVehicles();
  const { addQuery } = useQuery();
  const [showFilterAdvanced, setShowFilterAdvanced] = useState(false);

  const clearFilters = () => {
    addQuery({
      MakeID: null,
      ModelID: null,
      VersionID: null,
      Type: null,
      Years: null,
      Prices: null,
      Radius: null,
      Colors: null,
    });
  };

  const onGetVehicles = async () => {
    setVehicles([]);
    addQuery({ ShowResults: true });
    await gePage({ Page: 1 });
  };

  const onShowFilterAdvanced = () => {
    setShowFilterAdvanced(!showFilterAdvanced);
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col-6 col-6-sm col-8-smx col-12-smxx mb-5">
          <button
            type="button"
            className={classNames('advanced-search-button', { disabled: !vehicles.length })}
            onClick={onShowFilterAdvanced}
          >
            <i className="fas fa-chevron-right" />
            {__('search.actions.advanced-button')}
          </button>
        </div>

        <div className="col-2 col-6-sm col-4-smx col-12-smxx mb-5">
          <button type="button" className="clear-filters" onClick={clearFilters}>
            {__('search.actions.clear-filters')}
          </button>
        </div>

        <div className="col-4 col-12-sm col-12-smx col-12-smxx mb-5">
          <button
            type="button"
            className={classNames('show-offers', { disabled: isLoadingVehicles })}
            onClick={onGetVehicles}
          >
            {__('search.actions.show-offers')}
          </button>
        </div>
      </div>
      {
        showFilterAdvanced && vehicles.length
          ? (
            <div className="row mt-2">
              <SearchFilterAdvanced />
            </div>
          ) : null
      }
    </>
  );
}
