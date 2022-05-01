function MostWantedVillain(props) {

    return (
        <div className="MostWanted">
            <p>{props.villain.name}</p>
            <p>{props.villain.fun_fact}</p>

        </div>
    )
 
}

export default MostWantedVillain;