import React from 'react';
import useWebmotors from './hooks/useWebmotors';

export default function SearchActions() {
  const { getVehicles } = useWebmotors();

  return (
    <div className="row mt-5">
      <div className="col-6">
        <button type="button" className="advanced-search-button">
          <i className="fas fa-chevron-right" />
          Busca Avançada
        </button>
      </div>

      <div className="col-2">
        <button type="button" className="clear-filters">
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
