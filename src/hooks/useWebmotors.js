import useGlobalApp from './useGlobalApp';
import { getVehicles as getWebmotorsVehicles } from '../facades/webmotors';

export default function useWebmotors() {
  const [vehicles, setVehicles] = useGlobalApp('vehicles', []);

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
