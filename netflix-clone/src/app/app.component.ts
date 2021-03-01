import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  videoTutorialUrl:string = 'https://www.youtube.com/watch?v=54km9J4Wh9s&t=66s&ab_channel=Programming%27sFun';
  title = 'netflix-clone';
  test:string = 'test1';
}
