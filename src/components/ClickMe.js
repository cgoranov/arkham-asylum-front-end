import { useState } from 'react'


function ClickMe() {

   const [counter, setCounter] = useState(0) 
    const [text, setText] = useState(0)
    const [word, setWord] = useState("")
   

    const handleClick = (e) => {
        e.preventDefault()
        setCounter(ps => ps + text)
        setText(0)
        setWord("")
    }

    const handleChange = (e) => {
        setText(e.target.value.length)
        setWord(e.target.value)
    }

    return (
        <div>
            <form onClick={handleClick}>
                <input placeholder="input word here" onChange={handleChange} value={word} />
                <input type="submit" value="Click Me!" />
            </form>
        
            <h2 className="ClickMe">{counter}</h2>
        </div>
        )
}

export default ClickMe