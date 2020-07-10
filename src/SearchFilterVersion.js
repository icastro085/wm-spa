import React from 'react';
import classNames from 'classnames';
import useVersion from './hooks/useVersion';

export default function SearchFilterVersion() {
  const { version } = useVersion();
  let isDisabled = false;

  if (!version.length) {
    isDisabled = true;
  }

  return (
    <div className={classNames('col-6', { disabled: isDisabled })}>
      <div className="field">
        <label>Versão:</label>
        <select>
          <option key="version-all" value="all">Todas</option>
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
