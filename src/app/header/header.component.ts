import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  pageTitle = 'The Will Will Web!';
  pageTitleLink = 'http://blog.miniasp.com/';

  pageSubtitle = '記載著 <strong>Will</strong> 在網路世界的學習心得與技術分享';

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
