import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ng2-bootstrap'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { ArchiveService } from './archive.service';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MapComponent } from './map/map.component';
import { MyMapDirective } from './my-map.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewComponent,
    HomeComponent,
    NewComponent,
    MapComponent,
    MyMapDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CollapseModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'new', component: NewComponent},
      { path: 'map', component: MapComponent}
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCyd2yGtlIEfFs56cOChd2_KLIPS-Yo1uE',
      libraries: ['places']
    })
  ],
  providers: [ArchiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
