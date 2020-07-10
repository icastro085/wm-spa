const DEFAULT_STATE = {
  items: [],
};

export const setAll = async (data) => ({
  type: 'VERSION_SET_ALL',
  payload: data,
});

const reducer = (state = DEFAULT_STATE, { type, payload }) => {
  if (type === 'VERSION_SET_ALL') {
    return {
      ...state,
      items: payload,
    };
  }

  return state;
};

export default reducer;
