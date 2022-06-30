import { Link } from "react-router-dom";

const NavBar = ({ num }) => {
    return (
        <header>
            <h3>
                <Link>Kenzie Shop</Link>
            </h3>
            <Link>
                {num > 0 && (
                <div>
                    <p>{num}</p>
                </div> )}
            </Link>
        </header>
    )
}

export default NavBar;