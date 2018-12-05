import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public title = 'Track Budget';
  public model = 1; // let model = 1
  constructor() { }

  ngOnInit() {
  }

}
