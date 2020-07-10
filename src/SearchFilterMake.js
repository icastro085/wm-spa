import React, { useEffect } from 'react';
import useMake from './hooks/useMake';
import useQuery from './hooks/useQuery';

export default function SearchFilterMake() {
  const { make, getMake } = useMake();
  const { query: { MakeID: MakeIDQuery = '' }, addQuery } = useQuery();

  useEffect(() => {
    getMake();
  }, []);

  const onChangeMake = (e) => {
    const MakeID = e.target.value;
    addQuery({ MakeID });
  };

  return (
    <div className="col-3">
      <div className="field">
        <label>Marca:</label>
        <select onChange={onChangeMake} value={MakeIDQuery}>
          <option key="make-all" value="">Todas</option>
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
