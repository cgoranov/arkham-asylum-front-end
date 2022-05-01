
function Villains(props) {

    const handleClick= (e) => {
        e.target.innerHTML = 
        `<div className="villain-text-block">
                <p>${props.villain.name}</p>
                <p>${props.villain.fun_fact}</p>
        </div>`
    }

    return (
        <div className={props.villain.name} onClick={handleClick}>
        </div>
    )
}

export default Villains;
