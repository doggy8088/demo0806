import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {

  @Input()
  keyword: string = '';

  constructor(private searchSearch: SearchService) {
  }

  ngOnInit() {
  }

}
