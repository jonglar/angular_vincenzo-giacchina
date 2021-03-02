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
  sticky:boolean = false;
  avatarUrl:string = 'https://occ-0-3144-2581.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbNhq0W1FIgBZ92BQTLs9ktpy55RSF8KeSH4is7xajGMnpsyWhsD2mt-F1rGJ2D5j3jbeml3kK7pPJnfVnQh_HU.png?r=f9b';

}
