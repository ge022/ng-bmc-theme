import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'front-page',
  template: `Front page!<div><a routerLink="/blog">blog</a></div>`,
  // templateUrl: 'front-page.component.html'
})

export class FrontPageComponent implements OnInit {
  constructor() { }

  ngOnInit() { 
    console.log('front page loaded!');
    
  }
}