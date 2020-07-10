import { useSelector, useDispatch } from 'react-redux';

import { getMake as getWebmotorsMake } from '../facades/webmotors';
import { setAll } from '../redux/make';

export default function useMake() {
  const make = useSelector(({ make: { items } }) => items);
  const dispatch = useDispatch();

  const setMake = (items) => {
    dispatch(setAll([...items]));
  };

  const getMake = async () => {
    const makeResult = await getWebmotorsMake();
    setMake(makeResult);
  };

  return {
    make,
    setMake,
    getMake,
  };
}
