import React, { useEffect } from 'react';

import VehiclesItem from './VehiclesItem';
import useVehicles from './hooks/useVehicles';

export default function VehiclesList() {
  const { vehicles, getVehicles } = useVehicles();

  useEffect(() => {
    getVehicles();
  }, []);

  return (
    <div className="row mt-5 container-items">
      {
        vehicles.map((vehicle) => <VehiclesItem key={`vehicle-${vehicle.ID}`} vehicle={vehicle} />)
      }
    </div>
  );
}
