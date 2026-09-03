import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  userReactiveForm: FormGroup = new FormGroup({

    username: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(5)
    ]),

    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(8)
    ]),

    confirmPassword: new FormControl<string>('')
  });


  onSubmitReactive(): void {

    if (this.userReactiveForm.invalid) {
      console.log("Invalid");
      return;
    }

    console.log(this.userReactiveForm.value);
  }
}