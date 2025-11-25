import { Component } from '@angular/core';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-playground',
  imports: [PopUpComponent],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss',
})
export class PlaygroundComponent {}
