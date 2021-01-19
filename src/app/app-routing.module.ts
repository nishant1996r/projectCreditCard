import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { ShowDataComponent } from './show-data/show-data.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'credit-card', component: CreditCardComponent },
  { path: 'show-data', component: ShowDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
