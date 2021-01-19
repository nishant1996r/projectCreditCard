import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PaymentService } from './payment.service';
import { ShowDataComponent } from './show-data/show-data.component';
import { StoreModule } from '@ngrx/store';
import { addProductReducer } from './payment.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardComponent,
    WelcomeComponent,
    ShowDataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    StoreModule.forRoot({ product: addProductReducer }),
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
