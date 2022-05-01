
function Villains(props) {
    return (
        <div className={props.villain.name}>
            <p>{props.villain.name}</p>
            <p>{props.villain.fun_fact}</p>
        </div>
    )
}

export default Villains;
