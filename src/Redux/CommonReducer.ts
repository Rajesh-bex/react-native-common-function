const initialState = {
  commonData: {
    one: false,
    two: false,
  },
  commonData2: {},
};

export const CommonTestReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'COMMON_DATA_REDUCER':
      return {
        ...state,
        commonData: {
          one: true,
          two: true,
        },
      };
    default:
      return {
        ...state,
      };
  }
};
