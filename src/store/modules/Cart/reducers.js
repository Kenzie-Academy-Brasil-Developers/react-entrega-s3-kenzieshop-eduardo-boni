import { ADD_ITENS, REMOVE_ITENS} from "./actionTypes";

const itensReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITENS:
      return [...state, action.item];

    case REMOVE_ITENS:
      return (state = state.filter((item) => item.id !== action.item));

    default:
      return state;
  }
};

export default itensReducer;