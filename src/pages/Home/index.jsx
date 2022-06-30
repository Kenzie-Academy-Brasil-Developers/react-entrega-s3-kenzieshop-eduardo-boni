import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar";
import ProductList from "../../components/ProductList";
import { Container } from "./style";

const Home = () => {
    const tshirts = useSelector((state) => state.itens);

    return (
        <Container>
            <NavBar num={tshirts.length}/>
            <ProductList />
        </Container>
    )
}

export default Home;