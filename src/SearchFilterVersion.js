import React, { useEffect } from 'react';
import classNames from 'classnames';
import useVersion from './hooks/useVersion';
import useQuery from './hooks/useQuery';
import { Select } from './Form';

export default function SearchFilterVersion() {
  const { version, setVersion, getVersion } = useVersion();
  const {
    query: {
      ModelID: ModelIDQuery = '',
      VersionID: VersionIDQuery = '',
    },
    addQuery,
  } = useQuery();
  const initialList = [{ ID: '', Name: __('search.filters.version-all') }];

  let isDisabled = false;

  if (!version.length) {
    isDisabled = true;
  }

  const onChangeVersion = (VersionID) => {
    addQuery({ VersionID });
  };

  useEffect(() => {
    if (!ModelIDQuery) {
      setVersion([]);
      addQuery({ VersionID: null });
    } else if (ModelIDQuery) {
      getVersion({ ModelID: parseInt(ModelIDQuery) });
    }
  }, [ModelIDQuery]);

  return (
    <div className={classNames('col-6 col-12-sm col-12-smx col-12-smxx', { disabled: isDisabled })}>
      <div className="field">
        <Select
          onChange={onChangeVersion}
          value={VersionIDQuery ? parseInt(VersionIDQuery) : VersionIDQuery}
          items={initialList.concat(version)}
        >
          {__('search.filters.version')}
        </Select>
      </div>
    </div>
  );
}
