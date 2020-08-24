const initialState = {
    lang: []
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "CHANGE_LANG":
            return {
                lang: action.newLang
            }
        default:
            return state;
    }
    return state;
}
export default reducer;