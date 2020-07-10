import axios from 'axios';

const webmotors = axios.create({
  baseURL: 'http://desafioonline.webmotors.com.br/api/OnlineChallenge/',
});

export const getVehicles = async ({
  page = 1,
} = {}) => {
  try {
    const { data } = await webmotors.get('Vehicles', {
      params: {
        Page: page,
      },
    });

    return data;
  } catch (e) {
    return null;
  }
};
