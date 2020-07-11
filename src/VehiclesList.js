import React, { useEffect, useRef } from 'react';

import VehiclesItem from './VehiclesItem';
import useFilteredVehicles from './hooks/useFilteredVehicles';
import useQuery from './hooks/useQuery';

export default function VehiclesList() {
  const {
    vehicles,
    vehiclesFiltered,
    gePage,
    isLoadingVehicles,
  } = useFilteredVehicles();
  const isEnableSearch = useRef(false);
  const { query: { ShowResults }, addQuery } = useQuery();

  useEffect(() => {
    const onScroll = async () => {
      if (isEnableSearch.current || !ShowResults) {
        return;
      }

      const currentScrollPosition = window.innerHeight + window.scrollY;
      const maxScrollPosition = document.body.scrollHeight;

      if (currentScrollPosition >= maxScrollPosition) {
        isEnableSearch.current = true;
        const nextPageOfVehicles = await gePage({ currentVehicles: vehicles });

        // only enable auto search if the last page has result
        if (nextPageOfVehicles && nextPageOfVehicles.length) {
          // delay to enable search again
          setTimeout(() => {
            isEnableSearch.current = false;
          }, 1000);
        }
      }
    };

    // define as FALSE if vehicles list was updated
    isEnableSearch.current = false;

    // remove event and add to prevent duplication
    document.removeEventListener('scroll', onScroll);
    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [vehicles]);// update scroll page after reload vehicles

  useEffect(() => {
    // prevent on first entry show result without press on search button
    addQuery({ ShowResults: null });
  }, []);

  return (
    <div className="row mt-5 container-items">
      {
        vehiclesFiltered.length
          ? (
            vehiclesFiltered.map((vehicle) => <VehiclesItem key={`vehicle-${vehicle.ID}`} vehicle={vehicle} />)
          )
          : !isLoadingVehicles && (
            <div className="col-12 mt-5 px-5">
              <p className="text-center empty-result">
                {__('search.message-empty')}
              </p>
            </div>
          )
      }

      {
        isLoadingVehicles
          ? (
            <div className="text-center col-12 mt-5 mb-5">
              <i className="fas fa-spinner fa-spin mr-2" />
              {__('search.message-wait')}
            </div>
          )
          : null
      }
    </div>
  );
}
