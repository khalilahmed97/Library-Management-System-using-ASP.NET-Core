import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbar,MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  name:string = '';
  isLogIn:boolean = false;
  constructor(private apiService: ApiService){

    this.apiService.userStatus.subscribe({
      next: (res) => {
        if(res==="loggedIn"){
          this.isLogIn = true
          var user = this.apiService.getUserInfo();
          this.name = user?.firstName + " " + user?.lastName
        }
      }
    })
  }

  logout(){
    this.apiService.logout()
  }
}
