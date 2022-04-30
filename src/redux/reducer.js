
const initialState = { characters: [] }

function reducer(state = initialState, action) {
    
    switch (action.type) {
        case "SHOW_CHARACTERS":
            return [...state]
        default:
            return state
    }

}

export default reducer;