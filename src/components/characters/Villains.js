
function Villains(props) {

    const handleClick = (e) => {
        console.log("event triggered!")
        const element = e.target.children[0]
        element.style.visibility='visible'
        
    }

    return (
        <div className={props.villain.name} onClick={handleClick}>
            <div className="villain-text-block" >
                <p>{props.villain.name}</p>
                <p>{props.villain.fun_fact}</p>
            </div>
        </div>
    )
}

export default Villains;
