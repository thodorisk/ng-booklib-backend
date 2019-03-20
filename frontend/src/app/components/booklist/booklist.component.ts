import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(private _service: BookService) { }

  ngOnInit() {
    this._service.getBooks().subscribe((books) => {
      console.log(books);
    });
  }
}
