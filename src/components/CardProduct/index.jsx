import { useDispatch } from "react-redux";
import addItensThunk from "../../store/modules/Cart/thunks";

const CardProduct = ({ id, name, img, preice, item }) => {
    const dispatch = useDispatch();

    const addCart = () => {
        dispatch(addItensThunk(item))
    }

    return (
        <div id={id}>
            <h5>{name}</h5>
            <img src={img} alt="camisa"/>
            <h4>R$ {preice.toFixed(2)}</h4>
            <button onClick={addCart}>Comprar</button>
        </div>
    )
}

export default CardProduct;