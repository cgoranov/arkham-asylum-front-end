import { SET_CHARACTERS, ADD_CHARACTERS } from "./actionTypes"

const setCharacters = (characters) => ({type: SET_CHARACTERS, payload: characters})
const addCharacter = (character) => ({type: ADD_CHARACTERS, payload: character })

export const fetchCharacters = () => {
    return dispatch => {
        fetch("http://localhost:3000/characters")
        .then(r => r.json())
        .then(characters => dispatch(setCharacters(characters)))
        .catch(err => console.error(err))
    }
} 

export const createCharacter = (character) => {
    return dispatch => {
        fetch("http://localhost:3000/characters", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(character)
        })
        .then(r => r.json())
        .then(data => {
            if (data.status === 201){
                dispatch(addCharacter(data.character))
            } else {
                alert(data.errors)
            }
        })
        .catch(err => console.error('Error', err))
    }
}