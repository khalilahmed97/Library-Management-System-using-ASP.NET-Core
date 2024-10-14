import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbar, MatButtonModule],
  templateUrl: './foooter.component.html',
  styleUrl: './foooter.component.css'
})
export class FoooterComponent {

}
