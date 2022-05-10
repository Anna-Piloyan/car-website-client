import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  addUserForm: FormGroup;
  
  constructor(private authService: AuthService, private router: Router) {
    this.addUserForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }

  ngOnInit(): void {}

  submit() {
    if (this.addUserForm.valid) {
      const user = new User(
        '',
        this.addUserForm.value.email,
        this.addUserForm.value.password
      );
      this.authService.login(user).subscribe({
        next: () => {
          //..redirect to auth
          this.router.navigate(['auth/home']);
        },
        error: (error) => {
          alert(error.message);
        },
      });
    }
  }
  regBtn() {
    this.router.navigate(['/register']);
  }
}
