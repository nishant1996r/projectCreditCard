import { Component, OnInit } from '@angular/core';
import { CreditCardPayment } from './credit-card.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { MatSnackBar } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PaymentService } from '../payment.service';
import { Observable } from 'rxjs';
import { StorageService } from '../app-storage';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css'],
})
export class CreditCardComponent implements OnInit {
  creditCard = new CreditCardPayment();
  CreditCardPaymentForm: FormGroup;
  successfull = false;
  valid = true;
  min = 1;
  toStartDate: any;
  card: Observable<CreditCardPayment[]>;
  c: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackbar: MatSnackBar,
    private paymentService: PaymentService,
    private storage: StorageService
  ) {}

  goBack() {
    // console.log(document.querySelector('.hi').textContent);

    this.router.navigate(['/']);
  }

  submit() {
    // currentdate
    var currentDate = new Date();
    let formatted_date =
      currentDate.getFullYear() +
      '-' +
      (currentDate.getMonth() + 1) +
      '-' +
      currentDate.getDate();
    // date to string
    var date = this.creditCard.ExpirationDate.toString();
    var currentDateArray: any = [];
    var dateArray: any = [];
    var s = '';
    var v = '';
    // taking ExpirationDate in array
    for (var i = 0; i <= date.length; i++) {
      if (date[i] != '-' && i != date.length) {
        s += date[i];
      } else {
        dateArray.push(Number(s));
        s = '';
      }
    }
    // taking current date in array
    for (var i = 0; i <= formatted_date.length; i++) {
      console.log(i, date.length);
      if (formatted_date[i] != '-' && i != formatted_date.length) {
        v += formatted_date[i];
      } else {
        currentDateArray.push(Number(v));
        v = '';
      }
    }
    console.log(dateArray, currentDateArray);
    // comparing both the dates
    var count = 0;
    for (var j = 0; j <= dateArray.length; j++) {
      if (dateArray[j] > currentDateArray[j]) {
        count = 1;
        console.log('c');
        break;
      } else if (dateArray[j] == currentDateArray[j]) {
        continue;
      } else {
        count = 2;
        console.log('n');

        this.snackbar.open('Date should be greater than the current date', '', {
          duration: 3000,
        });
        break;
      }
    }
    if (count == 0) {
      console.log('e');

      this.snackbar.open('Date should be greater than the current date', '', {
        duration: 3000,
      });
    }

    // checking for security code

    if (
      this.creditCard.SecurityCode.length > 0 &&
      this.creditCard.SecurityCode.length !== 3
    ) {
      this.snackbar.open('Please Provide Security Code of length 3', '', {
        duration: 3000,
      });
    }

    //pushing all the data if present
    if (
      this.creditCard.CreditCardNumber.length > 0 &&
      this.creditCard.CardHolder.length > 0 &&
      this.creditCard.Amount > 0 &&
      count == 1
    ) {
      this.c = this.creditCard;
      this.card = this.paymentService.getData(this.c);
      this.storage.setCard(this.card);

      this.snackbar.open('Card Successfully added', '', {
        duration: 3000,
      });

      this.router.navigate(['/show-data']);
    } else {
      this.snackbar.open('Please data correctly', '', {
        duration: 3000,
      });
    }
  }

  ngOnInit(): void {
    this.CreditCardPaymentForm = this.formBuilder.group({
      CreditCardNumber: ['', Validators.required],
      CardHolder: ['', Validators.required],
      ExpirationDate: ['', Validators.required],
      SecurityCode: [''],
      Amount: ['', Validators.required],
    });
  }
}
