import { Component, OnInit } from '@angular/core';
import { ArchiveService } from '../archive.service';
import { NewComponent } from '../new/new.component';
import { Book } from '../book'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books:Array<Book>;
  constructor(private s: ArchiveService) {
    this.books = s.listBooks;
  }
  ngOnInit() {}
}
