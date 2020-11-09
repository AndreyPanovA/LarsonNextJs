const initialState = {
  lang: "ru",
  site: "/servis-volvo",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LANG":
      return {
        ...state,
        lang: action.lang,
      };
    case "SELECT_NAV":
      return {
        ...state,
        site: action.site,
      };
    default:
      return state;
  }
};
export default reducer;
