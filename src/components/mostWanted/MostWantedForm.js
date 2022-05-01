import { useState } from 'react'

function MostWantedForm() {

    const [name, setName] = useState("")
    const [funFact, setFunFact] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value)
        console.log(name)
    }

    const handleFunFactChange = (e) => {
        setFunFact(e.target.value)
        console.log(funFact)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    } 

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="name" onChange={handleNameChange} />
            <input type="text" placeholder="fun_fact" onChange={handleFunFactChange} />
            <input type="submit" />
        </form>
    )

}

export default MostWantedForm