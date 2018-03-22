import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public projectList = [
    {
      img: '',
      time: '05-20-2018',
      title: 'Lorem ipsum dolor sit',
      desc: 'Sint fugiat facilis excepturi omnis iste quaerat molestiae accusantium enim dolores, molestias adipisci fuga dolor minus labore quidem.',
      url: ''
    },
    {
      img: '',
      time: '05-20-2018',
      title: 'Lorem ipsum dolor sit',
      desc: 'Sint fugiat facilis excepturi omnis iste quaerat molestiae accusantium enim dolores, molestias adipisci fuga dolor minus labore quidem.',
      url: ''
    },
    {
      img: '',
      time: '05-20-2018',
      title: 'Lorem ipsum dolor sit',
      desc: 'Sint fugiat facilis excepturi omnis iste quaerat molestiae accusantium enim dolores, molestias adipisci fuga dolor minus labore quidem.',
      url: ''
    }
  ];

  constructor() {}

  ngOnInit() {}
}
