import { useDispatch, useSelector } from 'react-redux';

import useVehicles from './useVehicles';
import useQuery from './useQuery';
import useMake from './useMake';
import useModel from './useModel';
import useVersion from './useVersion';
import { setPage, setIsLoading } from '../redux/vehicle';

export default function useFilteredVehicles() {
  const dispatch = useDispatch();
  const page = useSelector(({ vehicle }) => vehicle.page);
  const isLoadingVehicles = useSelector(({ vehicle }) => vehicle.isLoading);

  const { vehicles, getVehicles, setVehicles } = useVehicles();
  const { make } = useMake();
  const { model } = useModel();
  const { version } = useVersion();
  const { query } = useQuery();
  const {
    MakeID,
    ModelID,
    VersionID,
    Type = ['new', 'used'],
  } = query;

  const findFilter = (data = [], idToFind) => (
    (data.find(({ ID }) => ID === parseInt(idToFind)) || {}).Name
  );

  const filters = {
    Make: findFilter(make, MakeID),
    Model: findFilter(model, ModelID),
    Version: findFilter(version, VersionID),
    Type,
  };

  let vehiclesFiltered = vehicles;

  if (vehicles.length) {
    const typeToCheck = Array.isArray(Type) ? Type : [Type];

    vehiclesFiltered = vehicles.filter(({
      Make,
      Model,
      Version,
      KM,
    }) => {
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

      if (typeToCheck.length) {
        isValid = isValid && (
          (typeToCheck.indexOf('new') !== -1 && KM === 0)
          || (typeToCheck.indexOf('used') !== -1 && KM > 0)
        );
      }

      return isValid;
    });
  }

  const setIsloadingVehicles = (isLoadingUpdated = false) => {
    dispatch(setIsLoading(isLoadingUpdated));
  };

  const gePage = async ({ currentVehicles = [], Page = page + 1 }) => {
    setIsloadingVehicles(true);
    const nextPageOfVehicles = await getVehicles({ Page });
    setIsloadingVehicles(false);

    dispatch(setPage(Page));

    if (nextPageOfVehicles && nextPageOfVehicles.length) {
      const updatedVehicles = [...currentVehicles, ...nextPageOfVehicles];
      setVehicles(updatedVehicles);
    }

    return nextPageOfVehicles;
  };

  return {
    isLoadingVehicles,
    setIsloadingVehicles,
    vehiclesFiltered,
    vehicles,
    setVehicles,
    gePage,
  };
}
