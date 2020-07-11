import React, { useEffect } from 'react';
import useMake from './hooks/useMake';
import useQuery from './hooks/useQuery';
import { Select } from './Form';

export default function SearchFilterMake() {
  const { make, getMake } = useMake();
  const { query: { MakeID: MakeIDQuery = '' }, addQuery } = useQuery();
  const initialList = [{ ID: '', Name: 'Todas' }];

  useEffect(() => {
    getMake();
  }, []);

  const onChangeMake = (MakeID) => {
    addQuery({ MakeID });
  };

  return (
    <div className="col-3 col-6-sm col-12-smx col-12-smxx">
      <div className="field">
        <Select
          onChange={onChangeMake}
          value={MakeIDQuery ? parseInt(MakeIDQuery) : MakeIDQuery}
          items={initialList.concat(make)}
        >
          Marca:
        </Select>
      </div>
    </div>
  );
}
