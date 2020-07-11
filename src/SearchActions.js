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
          Busca Avançada
        </button>
      </div>

      <div className="col-2 col-6-sm col-4-smx col-12-smxx mb-5">
        <button type="button" className="clear-filters" onClick={clearFilters}>
          Limpar filtros
        </button>
      </div>

      <div className="col-4 col-12-sm col-12-smx col-12-smxx mb-5">
        <button
          type="button"
          className={classNames('show-offers', { disabled: isLoadingVehicles })}
          onClick={onGetVehicles}
        >
          VER OFERTAS
        </button>
      </div>
    </div>
  );
}
