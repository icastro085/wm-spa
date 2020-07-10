import React, { useEffect } from 'react';
import classNames from 'classnames';
import useVersion from './hooks/useVersion';
import useQuery from './hooks/useQuery';

export default function SearchFilterVersion() {
  const { version, setVersion, getVersion } = useVersion();
  const {
    query: {
      ModelID: ModelIDQuery,
      VersionID: VersionIDQuery,
    },
    addQuery,
  } = useQuery();

  let isDisabled = false;

  if (!version.length) {
    isDisabled = true;
  }

  const onChangeVersion = (e) => {
    const VersionID = e.target.value;
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
    <div className={classNames('col-6', { disabled: isDisabled })}>
      <div className="field">
        <label>Versão:</label>
        <select onChange={onChangeVersion} value={VersionIDQuery}>
          <option key="version-all" value="">Todas</option>
          {
            version.map(({ ID, Name }) => (
              <option key={`version-${ID}`} value={ID}>{Name}</option>
            ))
          }
        </select>
      </div>
    </div>
  );
}
