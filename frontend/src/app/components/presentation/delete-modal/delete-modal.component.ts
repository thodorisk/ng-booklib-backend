import { Component, Inject, Output, EventEmitter } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: "delete-modal",
  templateUrl: "./delete-modal.component.html",
  styleUrls: ["./delete-modal.component.scss"]
})
export class DeleteModalComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteModalComponent>,
    private _service: BookService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
