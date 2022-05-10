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
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  addUserForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.addUserForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }

  ngOnInit(): void {}

  register() {
    if (this.addUserForm.valid) {
      const user = new User(
        this.addUserForm.value.name,
        this.addUserForm.value.email,
        this.addUserForm.value.pass
      );
      this.authService.register(user).subscribe({
        next: () => {
          //..redirect to auth
          this.router.navigate(['/login']);
        },
        error: (error) => {
          alert(error.message);
        },
      });
    }
  }
}
