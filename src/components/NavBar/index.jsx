import { Link } from "react-router-dom";
import { Header } from "./style";
import { CgShoppingCart } from "react-icons/cg";

const NavBar = ({ num }) => {
    return (
        <Header>
            <h2>
                <Link to={"/"}>Kenzie Shop</Link>
            </h2>
            <Link to={"/cart"}>
                {num > 0 && (
                    <div>
                    <p>{num}</p>
                </div> )}
                <CgShoppingCart />
            </Link>
        </Header>
    )
}

export default NavBar;