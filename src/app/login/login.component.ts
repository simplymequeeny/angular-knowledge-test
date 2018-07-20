import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private authService: AuthService,
      private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      user: new FormControl('', [Validators.required, isUserExists]),
      password: new FormControl('', [Validators.required, isPasswordCorrect])
    });
  }

  login(user, password) {
    this.authService.authenticate(user, password)
      .subscribe((ok) => {
        if (ok) this.router.navigate(['/app']);
        else this.router.navigate(['/login']);
      });
  }
}

function isPasswordCorrect(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value !== null && control.value !== "admin") return { mismatch: true };
  
  return null;
}

function isUserExists(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value !== null && control.value !== "admin") return { mismatch: true };
  
  return null;
}