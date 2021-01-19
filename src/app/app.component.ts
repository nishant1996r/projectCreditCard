import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project1';

  constructor(private router: Router){}


  enter(){
    this.router.navigate(['/credit-card']);

  }
}
