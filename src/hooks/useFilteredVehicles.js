import { useRef } from 'react';

import useVehicles from './useVehicles';
import useQuery from './useQuery';
import useMake from './useMake';
import useModel from './useModel';
import useVersion from './useVersion';

export default function useFilteredVehicles() {
  const page = useRef(1);

  const { vehicles, getVehicles, setVehicles } = useVehicles();
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

  const gePage = async ({ currentVehicles = [], Page = page.current + 1 }) => {
    const nextPageOfVehicles = await getVehicles({ Page });
    page.current = Page;

    if (nextPageOfVehicles && nextPageOfVehicles.length) {
      const updatedVehicles = [...currentVehicles, ...nextPageOfVehicles];
      setVehicles(updatedVehicles);
    }

    return nextPageOfVehicles;
  };

  return {
    vehiclesFiltered,
    vehicles,
    gePage,
  };
}
