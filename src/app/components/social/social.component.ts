import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  public socialList = [
    {
      icon: 'fab fa-dribbble',
      url: 'https://www.uplabs.com/lm_torresrivera'
    },
    {
      icon: 'fab fa-github',
      url: 'https://github.com/luisMDev'
    },
    {
      icon: 'fab fa-twitter',
      url: 'https://twitter.com/LuisMDev'
    },
    {
      icon: 'fab fa-facebook',
      url: 'https://www.facebook.com/Luis-M-Torres-2064611147149338'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
