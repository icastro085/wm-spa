import React, { useEffect, useState } from 'react';
import useGeoLocation from './hooks/useGeoLocation';

export default function SearchLocationInput() {
  const { location } = useGeoLocation();
  const [currentLocation, setCurrentLocation] = useState('');

  const onClearLocation = () => {
    setCurrentLocation('');
  };

  useEffect(() => {
    setCurrentLocation(location.state ? `${location.city} - ${location.state}` : '');
  }, [location]);

  return (
    <>
      <label className="where">
        <i className="fas fa-map-marker-alt" />
        {__('search.filters.where')}
      </label>
      <input
        type="text"
        onChange={() => {}}
        value={currentLocation}
      />
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <i className="fas fa-times-circle" onClick={onClearLocation}>&nbsp;</i>
    </>
  );
}
