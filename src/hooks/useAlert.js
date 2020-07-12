import { useDispatch, useSelector } from 'react-redux';

import { setAlert as setAlertMessage } from '../redux/alert';

export default function useAlert() {
  const dispatch = useDispatch();
  const alerts = useSelector(({ alert: { items } }) => items);

  const setAlert = (alertMessage) => {
    dispatch(setAlertMessage([alertMessage]));
  };

  const clearAlert = () => {
    dispatch(setAlertMessage([]));
  };

  return {
    alerts,
    setAlert,
    clearAlert,
  };
}
