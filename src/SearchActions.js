import React from 'react';
import useQuery from './hooks/useQuery';
import useFilteredVehicles from './hooks/useFilteredVehicles';

export default function SearchActions() {
  const { gePage } = useFilteredVehicles();
  const { addQuery } = useQuery();

  const clearFilters = () => {
    addQuery({
      MakeID: null,
      ModelID: null,
      VersionID: null,
    });
  };

  const onGetVehicles = async () => {
    await gePage({ Page: 1 });
  };

  return (
    <div className="row mt-5">
      <div className="col-6">
        <button type="button" className="advanced-search-button">
          <i className="fas fa-chevron-right" />
          Busca Avançada
        </button>
      </div>

      <div className="col-2">
        <button type="button" className="clear-filters" onClick={clearFilters}>
          Limpar filtros
        </button>
      </div>

      <div className="col-4">
        <button type="button" className="show-offers" onClick={onGetVehicles}>
          VER OFERTAS
        </button>
      </div>
    </div>
  );
}
