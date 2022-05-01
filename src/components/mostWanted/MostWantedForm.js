import { useState } from 'react'

function MostWantedForm() {

    const [name, setName] = useState("")
    const [funFact, setFunFact] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
    } 

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" onChange={handleNameChange} />
            <input type="text" placeholder="fun_fact" />
            <input type="submit" />
        </form>
    )

}

export default MostWantedForm