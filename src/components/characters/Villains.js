
function Villains(props) {
    return (
        <div key={props.villain.id}>
            <p >{props.villain.name}</p>
        </div>
    )
}

export default Villains;
