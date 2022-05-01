function Batman(props){


    const handleMove = (e) => {
        console.log("mouse moving!")
        // e.target.style.left = `${e.pageX}px`
        // e.target.syle.top = `${e.pageY}px`
    }


    return (
        <div className="Batman" key={props.batman.id} onMouseMove={handleMove}>
        </div>
    )

}

export default Batman