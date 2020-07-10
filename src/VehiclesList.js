import React, { useEffect } from 'react';

import VehiclesItem from './VehiclesItem';
import useWebmotors from './hooks/useWebmotors';

export default function VehiclesList() {
  const { vehicles, getVehicles } = useWebmotors();

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
