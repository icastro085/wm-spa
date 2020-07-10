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

export const getMake = async () => {
  try {
    const { data } = await webmotors.get('Make');

    return data;
  } catch (e) {
    return null;
  }
};

export const getModel = async ({
  MakeID,
}) => {
  try {
    const { data } = await webmotors.get('Model', { params: { MakeID } });

    return data;
  } catch (e) {
    return null;
  }
};

export const getVersion = async ({
  ModelID,
}) => {
  try {
    const { data } = await webmotors.get('Version', { params: { ModelID } });

    return data;
  } catch (e) {
    return null;
  }
};
