import { Component, OnInit, ViewChild } from "@angular/core";
import { BookService } from "src/app/services/book/book.service";
import {
  MatPaginator,
  MatTableDataSource,
  MatSort,
  MatDialog
} from "@angular/material";
import { EditModalComponent } from "../../presentation/edit-modal/edit-modal.component";
import { DeleteModalComponent } from "../../presentation/delete-modal/delete-modal.component";
import { AddModalComponent } from "../../presentation/add-modal/add-modal.component";
import { AuthService } from "src/app/services/auth/auth.service";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";

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
  selector: "app-booklist",
  templateUrl: "./booklist.component.html",
  styleUrls: ["./booklist.component.scss"]
})
export class BookListComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public searchKey: string = null;

  public displayedColumns: string[] = [
    "id",
    "title",
    "author",
    "category",
    "year",
    "isbn",
    "actions"
  ];

  public dataSource: MatTableDataSource<IBookData>;

  constructor(
    private _service: BookService,
    private _authService: AuthService,
    public dialog: MatDialog,
    private _router: Router
  ) {}

  public ngOnInit(): void {
    this._getData();
  }

  private _getData(): void {
    this._service.getBooks().subscribe((data: Array<any>) => {
      let array = data.map((x, index) => {
        return {
          id: index + 1,
          _id: x._id,
          title: x.title,
          author: x.author,
          category: x.category,
          year: x.year,
          isbn: x.isbn
        };
      });

      this.dataSource = new MatTableDataSource(array);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public openEditDialog(book: IBookData): void {
    const dialogRef = this.dialog.open(EditModalComponent, {
      data: {
        book: book
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this._getData();
    });
  }

  public openDeleteDialog(id: string): void {
    const dialogRef = this.dialog.open(DeleteModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this._service.deleteBook(id).subscribe(res => {
          this._getData();
        });
      }
    });
  }

  public openAddDialog(): void {
    const dialogRef = this.dialog.open(AddModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      this._getData();
    });
  }

  public onClear(): void {
    this.searchKey = "";
    this.applyFilter();
  }

  public applyFilter(): void {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }
}
