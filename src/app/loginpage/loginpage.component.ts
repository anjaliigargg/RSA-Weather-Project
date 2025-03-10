import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-loginpage',
    standalone: true,
    imports: [CommonModule,FormsModule],
    templateUrl: './loginpage.component.html',
    styleUrl: './loginpage.component.scss'
})
export class LoginpageComponent {
  username = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  login() {
    if(this.username === 'wander' && this.password === 'mountains') {
      this.router.navigate(['/weather']);
    }else {
      this.error= 'Invalid credentials';
    }
  }
}
