import {
  fromJS
} from 'immutable';
import * as actionTypes from './actionTypes'

import bankImage from '../../../static/images/tmp/bank.jpg'

const defaultState = fromJS({
  card_list: [
    {
      thumb: bankImage,
      id: 1,
    },
    {
      thumb: bankImage,
      id: 2,
    },
    {
      thumb: bankImage,
      id: 3,
    }
  ]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CARD_LIST:
      return state.merge({
        card_list: state.card_list.push(action.card)
      });
    default:
      return state;
  }
}
