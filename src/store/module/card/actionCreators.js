import * as actionTypes from "./actionTypes";

const cardList = card => ({
  type: actionTypes.CARD_LIST,
  card
});

export const addCard = card => {
  return dispatch => {
    dispatch(cardList(card));
  };
};