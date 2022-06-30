import { useDispatch } from "react-redux";
import addItensThunk from "../../store/modules/Cart/thunks";
import { Card } from "./style";

const CardProduct = ({ id, name, img, category, price, item }) => {
    const dispatch = useDispatch();

    const addCart = () => {
        dispatch(addItensThunk(item))
    }

    return (
        <Card id={id}>
            <h3>{name}</h3>
            <img src={img} alt="camiseta"/>
            <h4 className="category">{category}</h4>
            <h4>R$ {price.toFixed(2).replace('.', ',')}</h4>
            <button onClick={addCart}>Comprar</button>
        </Card>
    )
}

export default CardProduct;