import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import useAlert from './hooks/useAlert';

export default function Alert() {
  const { alerts, clearAlert } = useAlert();
  const idTime = useRef();

  useEffect(() => {
    if (alerts.length) {
      clearTimeout(idTime.current);
      idTime.current = setTimeout(() => clearAlert(), 2000);
    }
  }, [alerts]);

  return (
    <>
      {
        alerts.map(({ message, type = 'success' }) => (
          <div key={`alert-${Math.random()}`} className={classNames('alert', type)}>
            {message}
          </div>
        ))
      }
    </>
  );
}
