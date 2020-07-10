import React, { useEffect, useRef } from 'react';

import VehiclesItem from './VehiclesItem';
import useFilteredVehicles from './hooks/useFilteredVehicles';

export default function VehiclesList() {
  const { vehicles, vehiclesFiltered, gePage } = useFilteredVehicles();
  const isSearch = useRef(false);

  useEffect(() => {
    const onScroll = async () => {
      if (isSearch.current) {
        return;
      }

      const currentScrollPosition = window.innerHeight + window.scrollY;
      const maxScrollPosition = document.body.scrollHeight;

      if (currentScrollPosition >= maxScrollPosition) {
        isSearch.current = true;
        const nextPageOfVehicles = await gePage({ currentVehicles: vehicles });

        if (nextPageOfVehicles && nextPageOfVehicles.length) {
          // delay to enable search again
          setTimeout(() => {
            isSearch.current = false;
          }, 1000);
        }
      }
    };

    document.removeEventListener('scroll', onScroll);
    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [vehicles]);

  return (
    <div className="row mt-5 container-items">
      {
        vehiclesFiltered.length
          ? (
            vehiclesFiltered.map((vehicle) => <VehiclesItem key={`vehicle-${vehicle.ID}`} vehicle={vehicle} />)
          )
          : (
            <div className="col-12 mt-5">
              <p className="text-center empty-result">
                Sem resultados, utilize os filtros acima para buscar por ofertars
              </p>
            </div>
          )
      }
    </div>
  );
}
