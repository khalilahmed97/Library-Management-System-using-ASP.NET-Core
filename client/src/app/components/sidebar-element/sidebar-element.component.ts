import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { UserType } from '../../../models';
import { RouterModule } from '@angular/router';
export interface NavigationItems {
  name: string,
  link: string
};

@Component({
  selector: 'app-sidebar-element',
  standalone: true,
  imports: [MatCardModule, MatListModule,RouterModule],
  templateUrl: './sidebar-element.component.html',
  styleUrl: './sidebar-element.component.css'
})


export class SidebarElementComponent {
  panelName : string = ""
  apiService: ApiService;
  navigationItem: NavigationItems[] = []

  constructor(apiService: ApiService, private router: Router){

    
    this.apiService = apiService

    this.apiService.userStatus.subscribe({
      next: (res) => {
        if(res==="loggedIn"){
          this.router.navigateByUrl("/home")
          let user = this.apiService.getUserInfo()
          
          if(user !==null && user?.userType === UserType.ADMIN){
            this.panelName = "Admin Panel";
            this.navigationItem = [
              {name:"View Books", link:"/view-books"},
              {name:"Return book", link:"/return-book"},
              {name:"View Users", link:"/view-user"},
              {name:"Request Approval", link:"/request-approval"},
              {name:"All Orders", link:"/all-orders"},
              {name:"My Orders", link:"/my-orders"},
              {name:"Maintenance", link:"/maintenance"},
            ]
          }
          else if(user !== null && user?.userType === UserType.STUDENT){
            this.panelName="Student Panel";
            this.navigationItem = [
              {name:"View Books", link:"/view-books"},
              {name:"My Orders", link:"/my-orders"}
            ]
          }
        }

        else if(res==="loggedOff"){
          this.panelName="Auth Panel";
          router.navigateByUrl("")
          this.navigationItem = []
        }
      }
    })
  }




}
