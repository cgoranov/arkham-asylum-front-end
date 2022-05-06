import { SET_CHARACTERS, ADD_CHARACTERS } from "../actions/actionTypes";

const initialState = { characters: [] }

function reducer(state = initialState, action) {
    
    switch (action.type) {
        case SET_CHARACTERS:
            return { ...state, characters: action.payload }
        case ADD_CHARACTERS:
            return { ...state, characters: [...state.characters, action.payload]}
        default:
            return state
    }

}

export default reducer;