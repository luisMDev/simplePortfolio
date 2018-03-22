import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public title = `Luis <b>M.</b> Torres`;
  public subTitle = `Entrepreneur, UI/UX , and Developer`;

  constructor() {}

  ngOnInit() {}
}
