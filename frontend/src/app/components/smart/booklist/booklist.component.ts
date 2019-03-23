import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import { MatPaginator, MatTableDataSource, MatTable, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditModalComponent } from '../../presentation/edit-modal/edit-modal.component';
import { DeleteModalComponent } from '../../presentation/delete-modal/delete-modal.component';
import { AddModalComponent } from '../../presentation/add-modal/add-modal.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 12, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 13, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 14, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 15, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 16, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 17, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 18, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 19, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

export interface Category {
  value: string;
  name: string;
}

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BookListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['position', 'name', 'weight', 'category', 'year', 'isbn', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  public categories: Category[] = [];

  constructor(private _service: BookService, public dialog: MatDialog) {
    this.categories = [
      {value: 'steak-0', name: 'Steak'},
      {value: 'pizza-1', name: 'Pizza'},
      {value: 'tacos-2', name: 'Tacos'}
    ];
  }

  ngOnInit() {
    this._service.getBooks().subscribe((books) => {
      console.log(books);
    });

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public openEditDialog(): void {
    const dialogRef = this.dialog.open(EditModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public openAddDialog(): void {
    const dialogRef = this.dialog.open(AddModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
