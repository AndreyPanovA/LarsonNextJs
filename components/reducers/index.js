const initialState = {
  lang: "ru",
  site: "/servis-volvo",
  carItem: "volvo-c30",
  diagnosticsTitle: ""
};
const putCar =(car)=> ({type:"SELECT_CAR", payload:car})
const putDiagnosticsTitle =(work)=> ({type:"SELECT_DIAGNOSTICS", payload:work})
export const setCar = (dispatch)=>(car)=>dispatch(putCar(car))
export const setDiagnosticsTitle = (dispatch)=> (work)=>dispatch(putDiagnosticsTitle(work))

 

const reducer = (state = initialState, action) => {
  console.log(action, "action")
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
      case "SELECT_CAR":
        return {
          ...state,
          carItem: action.payload,
        };
        case "SELECT_DIAGNOSTICS":
          return {
            ...state,
            diagnosticsTitle: action.payload,
          };
    default:
      return state;
  }
};
export default reducer;
