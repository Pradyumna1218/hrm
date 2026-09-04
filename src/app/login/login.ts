import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, CommonModule],
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {

  private router = inject(Router);

  userReactiveForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('')
  });

  onSubmitReactive(): void {
    if (this.userReactiveForm.invalid) {
      this.userReactiveForm.markAllAsDirty();
      return;
    }

    console.log(this.userReactiveForm.controls.username.value);

    // this.router.navigate(['/dashboard'], {
    //   state: { data: this.userReactiveForm.value }
    // });
    this.router.navigate(['home/dashboard'], {
      queryParams: { data: JSON.stringify(this.userReactiveForm.value) }
    });
  }
}