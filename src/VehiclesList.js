import React, { useEffect } from 'react';

import VehiclesItem from './VehiclesItem';
import useVehicles from './hooks/useVehicles';
import useQuery from './hooks/useQuery';

export default function VehiclesList() {
  const { vehicles, getVehicles } = useVehicles();
  const { query } = useQuery();

  useEffect(() => {
    getVehicles();
  }, []);

  console.log(query, '------');

  return (
    <div className="row mt-5 container-items">
      {
        vehicles.map((vehicle) => <VehiclesItem key={`vehicle-${vehicle.ID}`} vehicle={vehicle} />)
      }
    </div>
  );
}
