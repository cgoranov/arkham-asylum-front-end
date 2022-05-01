import { useState } from 'react'
import { createCharacter } from '../../actions/actions'

function MostWantedForm() {

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
        createCharacter({name, funFact})
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