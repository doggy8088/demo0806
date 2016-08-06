import { Component } from '@angular/core';
import { HeaderComponent } from './header';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeaderComponent]
})
export class AppComponent {
  title = 'app works!';
}
