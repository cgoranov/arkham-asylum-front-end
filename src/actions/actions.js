import { SET_CHARACTERS } from "./actionTypes"

const setCharacters = (characters) => ({type: SET_CHARACTERS, payload: characters})

export const fetchCharacters = () => {
    return dispatch => (
        fetch("http://localhost:3000/characters")
        .then(r => r.json())
        .then(characters => dispatch(setCharacters(characters)))
        .catch(err => console.error(err))
    )
} 