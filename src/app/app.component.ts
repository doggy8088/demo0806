import { Component } from '@angular/core';
import { HeaderComponent } from './header';
import { ArticleComponent } from './article';
import { SearchComponent } from './search';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeaderComponent, ArticleComponent, SearchComponent]
})
export class AppComponent {
  title = 'app works!';

  subtitle = '記載著 <strong>Will</strong> 在網路世界的學習心得與技術分享';
  
  constructor(private searchSearch: SearchService) {
  }

}
