import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar";
import ItensCard from "../../components/ItensCart";
import { Container } from "./style";

const Cart = () => {
    const tshirts = useSelector((state) => state.itens);
  
    const valor = tshirts.reduce((acc, next) => next.price + acc, 0);
   
    return (
        <>
        <NavBar />
        <Container>
            <div className="Cont">
                <header>
                    <p>Produtos</p>
                    <p>Preço</p>
                </header>
                {tshirts.map((item, index) => (
                    <ItensCard 
                    key={index}
                    img={item.img}
                    price={item.price}
                    name={item.name}
                    id={item.id}/>
                ))}
            </div>

            <div className="TotalValue">
                <header>
                    <h3>Resumo do pedido</h3>
                </header>
                <div className="Value">
                    <p>Valor Total:</p>
                    <p>R$ {valor.toFixed(2).replace('.', ',')}</p>
                </div>
                <button>Finalizar compra</button>
            </div>
        </Container>
        </>
    )
}

export default Cart;