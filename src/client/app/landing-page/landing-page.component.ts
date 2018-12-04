import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public title = 'Track Budget';
  public model = 1; // let model = 1
  constructor() { }

  ngOnInit() {
  }

}
