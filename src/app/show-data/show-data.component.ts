import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { cards } from '../../assets/card-holder';
import { StorageService } from '../app-storage';
import { CreditCardPayment } from '../credit-card/credit-card.model';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css'],
})
export class ShowDataComponent implements OnInit {
  c = cards;
  showCard: Observable<CreditCardPayment[]>;
  p: any = [];
  temp: any = [];
  errorMessage: any;

  constructor(private storage: StorageService, private router: Router) {}

  back() {
    this.router.navigate(['./credit-card']);
  }

  here() {
    console.log(this.showCard[0], 'really');
    this.showCard.subscribe(
      (r) => {
        console.log(r, 454674565);
        this.p = r[0];
        console.log(this.p);
        Object.keys(this.p).forEach((key) => {
          this.temp[key] = [this.p[key]];
          this.temp[key] = this.p[key];
        });
        console.log(this.temp, 1111);
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  ngOnInit(): void {
    this.showCard = this.storage.getCard();
    this.here();
  }
}
