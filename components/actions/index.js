const changeLang = (lang) => {
  return {
    type: "CHANGE_LANG",
    lang,
  };
};
const selectNav = (site) => {
  return {
    type: "SELECT_NAV",
    site,
  };
};
export { changeLang, selectNav };
