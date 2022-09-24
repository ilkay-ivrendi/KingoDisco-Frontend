import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  buttonLink = '#';
  buttonLabel = 'App Neon Button';

  constructor() { }

  ngOnInit(): void {
  }

}
