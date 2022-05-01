import { useState } from 'react'
import { createCharacter } from '../../actions/actions'
import { useDispatch } from 'react-redux'

function MostWantedForm() {

    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [funFact, setFunFact] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleFunFactChange = (e) => {
        setFunFact(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createCharacter({name: name, fun_fact: funFact}))
        setName("");
        setFunFact("");
    } 

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" onChange={handleNameChange} />
            <input type="text" placeholder="fun_fact" onChange={handleFunFactChange} />
            <input type="submit" value="Add" />
        </form>
    )

}

export default MostWantedForm