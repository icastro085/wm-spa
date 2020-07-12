const DEFAULT_STATE = {
  items: [],
};

export const setAlert = async (alert) => ({
  type: 'SET_ALERT',
  payload: alert,
});

const reducer = (state = DEFAULT_STATE, { type, payload }) => {
  if (type === 'SET_ALERT') {
    return {
      ...state,
      items: payload,
    };
  }

  return state;
};

export default reducer;
