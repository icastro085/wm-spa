import { useEffect } from 'react';

import useVehicles from './useVehicles';
import useQuery from './useQuery';
import useMake from './useMake';
import useModel from './useModel';
import useVersion from './useVersion';

export default function useFilteredVehicles() {
  const { vehicles, getVehicles } = useVehicles();
  const { make } = useMake();
  const { model } = useModel();
  const { version } = useVersion();
  const { query } = useQuery();
  const { MakeID, ModelID, VersionID } = query;

  const findFilter = (data = [], idToFind) => (
    (data.find(({ ID }) => ID === parseInt(idToFind)) || {}).Name
  );

  const filters = {
    Make: findFilter(make, MakeID),
    Model: findFilter(model, ModelID),
    Version: findFilter(version, VersionID),
  };

  let vehiclesFiltered = vehicles;

  useEffect(() => {
    getVehicles();
  }, []);

  if (vehicles.length) {
    vehiclesFiltered = vehicles.filter(({ Make, Model, Version }) => {
      let isValid = true;

      if (filters.Make) {
        isValid = isValid && Make === filters.Make;
      }

      if (filters.Model) {
        isValid = isValid && Model === filters.Model;
      }

      if (filters.Version) {
        isValid = isValid && Version === filters.Version;
      }

      return isValid;
    });
  }

  return {
    vehicles: vehiclesFiltered,
  };
}
