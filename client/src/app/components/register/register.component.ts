import { Component, inject } from '@angular/core';
import { SharedModule } from '../shared-modules';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  apiService: ApiService;
  snackBar: MatSnackBar;

  constructor(fb: FormBuilder, apiService: ApiService, snackBar: MatSnackBar) {
    this.registerForm = fb.group({
      firstName: fb.control('Ahmed', [Validators.required]),
      lastName: fb.control('Ali', [Validators.required]),
      email: fb.control('Ahmed@gmail.com', [Validators.required]),
      mobile: fb.control('03453276290', [Validators.required]),
      password: fb.control('12345678', [Validators.required]),
      confirmPassword: fb.control('12345678', [Validators.required]),
    })

    this.apiService = apiService;
    this.snackBar = snackBar
  }

  register() {
let password = this.registerForm.get("password")?.value
let confirmPassword = this.registerForm.get("confirmPassword")?.value
    if(password===confirmPassword){
      let user = {
        firstName: this.registerForm.get("firstName")?.value,
        lastName: this.registerForm.get("lastName")?.value,
        email: this.registerForm.get("email")?.value,
        phoneNumber: this.registerForm.get("mobile")?.value,
        password: password,
      }
  
      this.apiService.register(user).subscribe({
        next: (res:any) => {
          console.log(res)
          this.snackBar.open(res.message, "OK", { duration: 3000 })
        },
        error: (e) => {
          console.log(e.message)
        }
      }
      )
    }
    else{
      this.snackBar.open("Password and Confirm Password Fields dont Match", "OK", { duration: 3000 })
    }
   
  }



}
