import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { CreditCardPayment } from './credit-card/credit-card.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  cardData: Observable<CreditCardPayment[]>;

  constructor() {}

  private storageSub = new Subject<string>();

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  setCard(data: any) {
    this.cardData = data;
  }

  getCard() {
    return this.cardData;
  }
}
