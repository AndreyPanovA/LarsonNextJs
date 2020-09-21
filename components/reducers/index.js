const initialState = {
  lang: "ru",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LANG":
      return {
        ...state,
        lang: action.lang,
      };
    default:
      return state;
  }
};
export default reducer;
