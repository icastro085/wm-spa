import axios from 'axios';

const geoip = axios.create({
  baseURL: 'https://geoip-db.com/json/',
});

export const getLocation = async () => {
  try {
    const { data } = await geoip.get();
    return data;
  } catch (e) {
    return null;
  }
};
