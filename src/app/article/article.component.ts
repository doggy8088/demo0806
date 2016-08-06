import { Component, OnInit, Input } from '@angular/core';
import { IArticle } from '../shared/article';

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() i: number;
  @Input() item: IArticle;

  constructor() { }

  ngOnInit() {
  }

}
