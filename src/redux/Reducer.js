import { SET_CHARACTERS } from "../actions/actionTypes";
const initialState = { characters: [] }

function reducer(state = initialState, action) {
    
    switch (action.type) {
        case SET_CHARACTERS:
            return {...state, characters: [...state.characters]}
        default:
            return state
    }

}

export default reducer;