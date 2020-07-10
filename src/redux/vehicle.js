const DEFAULT_STATE = {
  items: [],
  page: 1,
  isLoading: false,
};

export const setAll = async (data) => ({
  type: 'VEHICLES_SET_ALL',
  payload: data,
});

export const setPage = (page) => ({
  type: 'VEHICLES_SET_PAGE',
  payload: page,
});

export const setIsLoading = (isLoading) => ({
  type: 'VEHICLES_SET_ISLOADING',
  payload: isLoading,
});

const reducer = (state = DEFAULT_STATE, { type, payload }) => {
  if (type === 'VEHICLES_SET_ALL') {
    return {
      ...state,
      items: payload,
    };
  }

  if (type === 'VEHICLES_SET_PAGE') {
    return {
      ...state,
      page: payload,
    };
  }

  if (type === 'VEHICLES_SET_ISLOADING') {
    return {
      ...state,
      isLoading: payload,
    };
  }

  return state;
};

export default reducer;
