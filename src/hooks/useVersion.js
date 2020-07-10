import { useSelector, useDispatch } from 'react-redux';

import { getVersion as getWebmotorsVersion } from '../facades/webmotors';
import { setAll } from '../redux/version';

export default function useVersion() {
  const version = useSelector(({ version: { items } }) => items);
  const dispatch = useDispatch();

  const setVersion = (items) => {
    dispatch(setAll([...items]));
  };

  const getVersion = async ({ ModelID }) => {
    const makeResult = await getWebmotorsVersion({ ModelID });
    setVersion(makeResult);
  };

  return {
    version,
    setVersion,
    getVersion,
  };
}
