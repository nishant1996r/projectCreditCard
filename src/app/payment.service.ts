import { Injectable } from '@angular/core';
import { cards } from '../assets/card-holder';
import { CreditCardPayment } from '../app/credit-card/credit-card.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addProductReducer } from './payment.reducer';
import { AppState } from './app.state';

@Injectable()
export class PaymentService {
  cards: Observable<CreditCardPayment[]>;
  pro = new CreditCardPayment();
  p: any = [];
  errorMessage: any;
  tmepArr: any = [];
  constructor(private store: Store<AppState>) {}

  // data(allData: any) {
  //   cards.push(allData);
  // }
  getData(data) {
    console.log(data, 345);
    this.store.dispatch({
      type: 'ADD_CARD',
      payload: <CreditCardPayment>{
        CreditCardNumber: data.CreditCardNumber,
        CardHolder: data.CardHolder,
        ExpirationDate: data.ExpirationDate,
        SecurityCode: data.SecurityCode,
        Amount: data.Amount,
      },
    });
    this.cards = this.store.select((state) => state.product);
    console.log(this.cards);
    return this.cards;
  }
}
