import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { EditModalComponent } from '../../presentation/edit-modal/edit-modal.component';
import { DeleteModalComponent } from '../../presentation/delete-modal/delete-modal.component';
import { AddModalComponent } from '../../presentation/add-modal/add-modal.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

export interface IBookData {
  title: string;
  author: string;
  category: string;
  year: number;
  isbn: string;
}

export interface ICategory {
  value: string;
  name: string;
}

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BookListComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'title', 'author', 'category', 'year', 'isbn', 'actions'];
  dataSource: MatTableDataSource<IBookData>;

  public categories: ICategory[] = [];
  public isUserLoggedIn: boolean = true;
  public booksData: IBookData[];

  constructor(private _service: BookService, private _authService: AuthService, public dialog: MatDialog, private _router: Router) {
    this.categories = [
      {value: 'steak-0', name: 'Steak'},
      {value: 'pizza-1', name: 'Pizza'},
      {value: 'tacos-2', name: 'Tacos'}
    ];

    this._service.getBooks().subscribe((data: IBookData[]) => {
      this.booksData = data;
    });

    this.dataSource = new MatTableDataSource(this.booksData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // public ngOnInit() {
  //   this._service.getBooks().subscribe((data: IBooksData[]) => {
  //     this.booksData = data;
  //   });

  //   this.dataSource = new MatTableDataSource(this.booksData);
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  public openEditDialog(book): void {
    this.dialog.open(EditModalComponent, {
      data: {
        book: book
      }
    });
  }

  public openDeleteDialog(id: string): void {
    const dialogRef = this.dialog.open(DeleteModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this._service.deleteBook(id).subscribe(res => {
          this._service.getBooks();
        });
      }
    });
  }

  public openAddDialog(): void {
    this.dialog.open(AddModalComponent);
  }
}