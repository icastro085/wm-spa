import React, { useEffect } from 'react';
import useMake from './hooks/useMake';
import useModel from './hooks/useModel';
import useVersion from './hooks/useVersion';

export default function SearchFilterMake() {
  const { make, getMake } = useMake();
  const { setModel, getModel } = useModel();
  const { setVersion } = useVersion();

  useEffect(() => {
    getMake();
  }, []);

  const onChangeMake = (e) => {
    const MakeID = e.target.value;

    if (MakeID === 'all') {
      setModel([]);
      setVersion([]);
    } else {
      getModel({ MakeID: parseInt(MakeID) });
    }
  };

  return (
    <div className="col-3">
      <div className="field">
        <label>Marca:</label>
        <select onChange={onChangeMake}>
          <option key="make-all" value="all">Todas</option>
          {
            make.map(({ ID, Name }) => (
              <option key={`make-${ID}`} value={ID}>{Name}</option>
            ))
          }
        </select>
      </div>
    </div>
  );
}
