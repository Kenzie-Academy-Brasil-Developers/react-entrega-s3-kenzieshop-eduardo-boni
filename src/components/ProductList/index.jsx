import warriors from "../../assets/warriors.jpeg";
import boston from "../../assets/boston.jpeg";
import lakers from "../../assets/lakers.jpeg";
import chicago from "../../assets/chicago.jpeg";
import dallas from "../../assets/dallas.jpeg";
import miami from "../../assets/miami.jpeg";
import spurs from "../../assets/spurs.jpg";
import bucks from "../../assets/bucks.jpeg";
import CardProduct from "../CardProduct";
import { Container } from "./style";

const ProductList = () => {
    const products = [
        {
            id: 1,
            category: "T-shirts",
            name: "Golden State Warriors",
            price: 189.00,
            img: warriors,
        },
        {
            id: 2,
            category: "T-shirts",
            name: "Boston Celtics",
            price: 170.99,
            img: boston,
        },
        {
            id: 3,
            category: "T-shirts",
            name: "Los Angeles Lakers",
            price: 189.99,
            img: lakers,
        },
        {
            id: 4,
            category: "T-shirts",
            name: "Chicago Bulls",
            price: 179.00,
            img: chicago,
        },
        {
            id: 5,
            category: "T-shirts",
            name: "Dallas Mavericks",
            price: 179.00,
            img: dallas,
        },
        {
            id: 6,
            category: "T-shirts",
            name: "Miami Heat",
            price: 179.00,
            img: miami,
        },
        {
            id: 7,
            category: "T-shirts",
            name: "San Antonio Spurs",
            price: 179.0,
            img: spurs,
        },
        {
            id: 8,
            category: "T-shirts",
            name: "Milwaukee Bucks",
            price: 169.00,
            img: bucks,
        },
    ]

    return (
        <Container>
            {products.map((item, index) => (
                <CardProduct key={index} id={item.id} name={item.name} category={item.category} img={item.img} price={item.price} item={item}/>
            ))}
        </Container>
    )
}

export default ProductList;