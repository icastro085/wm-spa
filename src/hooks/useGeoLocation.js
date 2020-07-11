import { useState, useEffect } from 'react';
import { getLocation } from '../facades/geoip';

export default function useGeoLocation() {
  const [location, setLocation] = useState({
    state: '',
    city: '',
  });

  useEffect(() => {
    const getResource = async () => {
      const data = await getLocation();
      setLocation(data);
    };

    getResource();
  }, []);

  return {
    location,
  };
}
