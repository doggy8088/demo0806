import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {

  @Input()
  keyword: string = "";

  @Output()
  search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  doSearch(event: KeyboardEvent, input: HTMLInputElement) {
    // if(event.keyCode == 13) {
      this.keyword = input.value;
      this.search.emit(input.value);
    // }
  }

}
