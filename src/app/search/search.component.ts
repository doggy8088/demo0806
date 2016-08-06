import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doSearch(event: KeyboardEvent, input: HTMLInputElement) {
    if(event.keyCode == 13) {
      this.keyword = input.value;
    }
  }

}
