import React from 'react';

export default function VehiclesItem({
  vehicle: {
    Image,
    KM,
    Make,
    Model,
    Price,
    Version,
    YearFab,
    YearModel,
  },
}) {
  return (
    <div className="item-container col-4 mb-5">
      <div className="item">
        <div className="image-container">
          <img alt={Version} src={Image} />
        </div>
        <div className="details">
          <span className="make-model my-3">{Make} - {Model}</span>
          <h3 className="version my-3">{Version}</h3>
          <span className="price my-3">R$ {Price}</span>

          <div className="sup-info">
            <span className="year">{YearFab}/{YearModel}</span>
            <span className="km">{KM} km</span>
          </div>
        </div>
      </div>
    </div>
  );
}
