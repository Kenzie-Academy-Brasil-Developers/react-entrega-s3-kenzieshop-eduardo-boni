import { useDispatch } from "react-redux";
import { removerItens } from "../../store/modules/Cart/actions";
import { Container } from "./style";

const ItensCart = ({ id, img, name, price }) => {
    const dispach = useDispatch(id);

    const remover = (id) => {
        dispach(removerItens(id));
    }

    return (
        <Container>
            <img src={img} alt="camiseta"/>
            <div>
                <p>{name}</p>
                <p>R$ {price.toFixed(2).replace('.', ',')}</p>
                <button onClick={() => remover(id)}>Remover</button>
            </div>
        </Container>
    )
}

export default ItensCart;