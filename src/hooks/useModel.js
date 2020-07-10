import { useSelector, useDispatch } from 'react-redux';

import { getModel as getWebmotorsModel } from '../facades/webmotors';
import { setAll } from '../redux/model';

export default function useMode() {
  const model = useSelector(({ model: { items } }) => items);
  const dispatch = useDispatch();

  const setModel = (items) => {
    dispatch(setAll([...items]));
  };

  const getModel = async ({ MakeID }) => {
    const makeResult = await getWebmotorsModel({ MakeID });
    setModel(makeResult);
  };

  return {
    model,
    setModel,
    getModel,
  };
}
