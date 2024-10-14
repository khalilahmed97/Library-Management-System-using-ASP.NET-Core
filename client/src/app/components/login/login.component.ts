import { Component } from '@angular/core';
import { SharedModule } from '../shared-modules';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hidePassword : boolean = true;
  loginForm: FormGroup;
  apiService: ApiService;
  snackbar: MatSnackBar;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  constructor(fb: FormBuilder, apiService: ApiService, snackbar: MatSnackBar){
    this.loginForm = fb.group({
      email: fb.control('khalilahmedsharif123@gmail.com', [Validators.required]),
      password: fb.control('admin123', [Validators.required])
    })

    this.apiService = apiService;
    this.snackbar = snackbar;
  }

  login(){
    let user = {
      email: this.loginForm.get("email")?.value,
      password: this.loginForm.get("password")?.value,
    }

    this.apiService.login(user).subscribe({
      next: (res:any) => {
        if(res==="not found"){
          this.snackbar.open("Credentials are Invalid", "OK" , {duration:3000})
        }
        else if (res==="unapproved"){
          this.snackbar.open("Your Account is not Approved by the Admin", "Ok", {duration:3000})
        }
        else{
          localStorage.setItem("access_token", res)
          this.apiService.userStatus.next("loggedIn")
          
        }
      },

      error: (err) => {
        console.log(err.message)
      } 

    })
  }
}
