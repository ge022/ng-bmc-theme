import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog',
  template: `blog!<div><a routerLink="/">home</a></div>`,
})

export class BlogComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}