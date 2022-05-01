
function Villains(props) {
    return (
        <div className={props.villain.name}>
            <div className="villain-text-block">
                <p>{props.villain.name}</p>
                <p>{props.villain.fun_fact}</p>
            </div>
        </div>
    )
}

export default Villains;
