import { Injectable } from '@angular/core';
import { IArticle } from './shared/article';
import { Http } from '@angular/http';

@Injectable()
export class SearchService {

  data: IArticle[];

  hot: string[] = ['Visual Studio Code', 'IT', '20', '偵錯'];

  keyword: string = '';

  constructor(private http: Http) {
    http.get('/api/articles.json').subscribe((value) => {
      this.data = this.defaults = value.json();
    });
  }

  doSearch(keyword: string) {
    this.keyword = keyword;
    console.log(keyword)
    this.data = this.defaults.filter( (value: IArticle) => {
      return value.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    });
  }

  defaults: IArticle[];

}
