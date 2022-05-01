import { useState } from 'react'

function MostWantedForm() {

    const [name, setName] = useState("")
    const [funFact, setFunFact] = useState("")

    return (
        <form>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="fun_fact" />
            <input type="submit" />
        </form>
    )

}