import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FoooterComponent } from './components/foooter/foooter.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarElementComponent } from './components/sidebar-element/sidebar-element.component';
import { ApiService } from './services/api.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent, FoooterComponent,MatSidenavModule, SidebarElementComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private apiService: ApiService){

  }

  ngOnInit(): void {
    let status = this.apiService.isUserLoggedIn() ? "loggedIn":"loggedOff"

    this.apiService.userStatus.next(status)
  }
}
