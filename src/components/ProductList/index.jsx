import CardProduct from "../CardProduct";

const ProductList = () => {
    const products = [
        {
            id: 1,
            name: "Camisa",
            price: 50.0,
            img: "t-shirt",
        },
        {
            id: 2,
            name: "Camisa",
            price: 50.0,
            img: "t-shirt",
        },
        {
            id: 3,
            name: "Camisa",
            price: 50.0,
            img: "t-shirt",
        },
        {
            id: 4,
            name: "Camisa",
            price: 50.0,
            img: "t-shirt",
        },
    ]

    return (
        <div>
            {products.map((item, index) => (
                <CardProduct key={index} id={item.id} name={item.name} price={item.price} img={item.img}/>
            ))}
        </div>
    )
}

export default ProductList;