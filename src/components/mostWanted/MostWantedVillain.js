function MostWantedVillains(props) {

    return (
        <div className={props.villain.name} onClick={handleClick}>
            <div className="villain-text-block" key={props.villain.id} >
                <p>{props.villain.name}</p>
                <p>{props.villain.fun_fact}</p>
            </div>
        </div>
    )
}

export default MostWantedVillains;