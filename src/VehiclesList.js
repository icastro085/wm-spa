import React from 'react';

import VehiclesItem from './VehiclesItem';
import useFilteredVehicles from './hooks/useFilteredVehicles';

export default function VehiclesList() {
  const { vehicles } = useFilteredVehicles();

  return (
    <div className="row mt-5 container-items">
      {
        vehicles.length
          ? (
            vehicles.map((vehicle) => <VehiclesItem key={`vehicle-${vehicle.ID}`} vehicle={vehicle} />)
          )
          : (
            <div className="col-12">
              <p className="text-center">Sem resultados</p>
            </div>
          )
      }
    </div>
  );
}
