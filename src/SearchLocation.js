import React from 'react';

export default function SearchLocation() {
  return (
    <div className="col-6 col-12-sm col-12-smx col-12-smxx group">
      <div className="field col-12-smx">
        <label className="where">
          <i className="fas fa-map-marker-alt" />
          Onde:
        </label>
        <input type="text" />
      </div>

      <div className="field input-radius">
        <label>Raio:</label>
        <select className="text-right">
          <option>100km</option>
        </select>
      </div>
    </div>
  );
}
