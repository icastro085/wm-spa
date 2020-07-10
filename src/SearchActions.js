import React from 'react';
import useVehicles from './hooks/useVehicles';
import useQuery from './hooks/useQuery';

export default function SearchActions() {
  const { getVehicles } = useVehicles();
  const { addQuery } = useQuery();

  const clearFilters = () => {
    addQuery({
      MakeID: null,
      ModelID: null,
      VersionID: null,
    });
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
        <button type="button" className="show-offers" onClick={getVehicles}>
          VER OFERTAS
        </button>
      </div>
    </div>
  );
}
