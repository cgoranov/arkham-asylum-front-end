
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <Link to="/">Home</Link>
                <Link to="instructions">Instructions</Link>
                <Link to="arkham_asylum">Arkham Asylum</Link>
                <Link to="most_wanted">Most Wanted</Link>
            </nav>
        </div>
    )
}

export default Navbar