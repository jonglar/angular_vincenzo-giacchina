import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book'
import { ArchiveService } from '../archive.service';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  book: any;
  constructor(private s: ArchiveService, private router: Router) {
    this.book = new Book();
  }
  readUrl(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event:any) => {
        this.book.img = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }
  onSubmit(){
    this.s.save(this.book);
    this.router.navigate(['/home']);
  }
  ngOnInit() {}
}
