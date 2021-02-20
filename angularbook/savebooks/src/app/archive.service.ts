import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class ArchiveService {
  listBooks:Array<Book>;
  constructor() {
    this.listBooks = [];
  }
  save(book: Book){
    this.listBooks.push(book);
  }
}
