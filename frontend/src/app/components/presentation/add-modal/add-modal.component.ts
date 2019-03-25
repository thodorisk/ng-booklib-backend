import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { IBookData } from '../../smart/booklist/booklist.component';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: "add-modal",
  templateUrl: "./add-modal.component.html",
  styleUrls: ["./add-modal.component.scss"]
})
export class AddModalComponent {

  public title: string = null;
  public author: string = null;
  public category: string = null;
  public year: number = null;
  public isbn: string = null;

  constructor(
    public dialogRef: MatDialogRef<AddModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IBookData,
    private _service: BookService
  ) {}

  public add(): void {
    let book = {
      title: this.title,
      author: this.author,
      category: this.category,
      year: this.year,
      isbn: this.isbn
    }
    this._service.addBook(book).subscribe(res => {
      this.dialogRef.close();
    });
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}
