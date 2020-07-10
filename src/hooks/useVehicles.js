import { useSelector, useDispatch } from 'react-redux';

import { getVehicles as getWebmotorsVehicles } from '../facades/webmotors';
import { setAll } from '../redux/vehicle';

export default function useVehicles() {
  const vehicles = useSelector(({ vehicle: { items } }) => items);
  const dispatch = useDispatch();

  const setVehicles = (items) => {
    dispatch(setAll([...items]));
  };

  const getVehicles = async ({ Page } = {}) => (
    getWebmotorsVehicles({ Page })
  );

  return {
    vehicles,
    setVehicles,
    getVehicles,
  };
}
