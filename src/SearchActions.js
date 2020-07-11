import React from 'react';
import classNames from 'classnames';
import useQuery from './hooks/useQuery';
import useFilteredVehicles from './hooks/useFilteredVehicles';

export default function SearchActions() {
  const { gePage, setVehicles, isLoadingVehicles } = useFilteredVehicles();
  const { addQuery } = useQuery();

  const clearFilters = () => {
    addQuery({
      MakeID: null,
      ModelID: null,
      VersionID: null,
      Type: null,
      Years: null,
      Prices: null,
      Radius: null,
    });
  };

  const onGetVehicles = async () => {
    setVehicles([]);
    addQuery({ ShowResults: true });
    await gePage({ Page: 1 });
  };

  return (
    <div className="row mt-5">
      <div className="col-6 col-6-sm col-8-smx col-12-smxx mb-5">
        <button type="button" className="advanced-search-button">
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
  );
}
