import { useSelector, useDispatch } from 'react-redux';

import { getVehicles as getWebmotorsVehicles } from '../facades/webmotors';
import { setAll } from '../redux/vehicles';

export default function useVehicles() {
  const vehicles = useSelector(({ vehicles: { items } }) => items);
  const dispatch = useDispatch();

  const setVehicles = (items) => {
    dispatch(setAll([...items]));
  };

  const getVehicles = async () => {
    const vehiclesResult = await getWebmotorsVehicles();
    setVehicles(vehiclesResult);
  };

  return {
    vehicles,
    setVehicles,
    getVehicles,
  };
}
