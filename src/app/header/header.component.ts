import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '.header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  pageTitle = 'The Will Will Web!';
  pageTitleLink = 'http://blog.miniasp.com/';

  @Input()
  pageSubtitle: string;

  num = 1;

  constructor() { }

  ngOnInit() {
  }

  plus(event: MouseEvent) {
    console.log(event);
    if(event.ctrlKey) {
      this.num++;
    }
  }

}
