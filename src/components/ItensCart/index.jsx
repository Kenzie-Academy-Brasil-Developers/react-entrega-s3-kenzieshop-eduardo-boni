import { useDispatch } from "react-redux";
import { removerItens } from "../../store/modules/Cart/actions";


const ItensCart = ({ id, img, name, price }) => {
    const dispach = useDispatch(id);

    const remover = (id) => {
        dispach(removerItens(id));
    }

    return (
        <div>
            <img src={img} alt={name}/>
            <div>
                <p>R$ {price.toFixed(2)}</p>
                <button onClick={() => remover(id)}>Remover</button>
            </div>
        </div>
    )
}

export default ItensCart;