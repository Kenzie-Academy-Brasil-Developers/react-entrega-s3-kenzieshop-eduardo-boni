import {addItens } from "./actions";

const addItensThunk = (item) => (dispatch) => {
  dispatch(addItens(item));
}

export default addItensThunk;
