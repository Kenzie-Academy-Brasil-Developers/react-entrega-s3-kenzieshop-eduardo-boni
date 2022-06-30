import { ADD_ITENS, REMOVE_ITENS } from "./actionTypes";

export const addItens = (item) => ({
  type: ADD_ITENS,
  item,
});
export const removerItens = (item) => ({
  type: REMOVE_ITENS,
  item,
});
