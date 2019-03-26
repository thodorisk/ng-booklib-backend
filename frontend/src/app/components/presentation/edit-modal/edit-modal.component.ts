import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { BookService } from "src/app/services/book/book.service";

@Component({
  selector: "edit-modal",
  templateUrl: "./edit-modal.component.html",
  styleUrls: ["./edit-modal.component.scss"]
})
export class EditModalComponent {
  public title: string = null;
  public author: string = null;
  public category: string = null;
  public year: number = null;
  public isbn: string = null;

  constructor(
    public dialogRef: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _service: BookService
  ) {}

  public ngOnInit() {
    this.title = this.data.book.title;
    this.author = this.data.book.author;
    this.category = this.data.book.category;
    this.year = this.data.book.year;
    this.isbn = this.data.book.isbn;
  }

  public cancel(): void {
    this.dialogRef.close();
  }

  public save(id): void {
    let book = [
      { propName: "title", value: this.title },
      { propName: "author", value: this.author },
      { propName: "category", value: this.category },
      { propName: "year", value: this.year },
      { propName: "isbn", value: this.isbn }
    ];

    this._service.updateBook(id, book).subscribe(res => {
      this.dialogRef.close();
    });
  }
}
