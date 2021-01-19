import { CreditCardPayment } from '../app/credit-card/credit-card.model';
import { Action } from '@ngrx/store';
export const ADD_CARD = 'ADD_CARD';
export function addProductReducer(state: CreditCardPayment[] = [], action) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}
