import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { IBookData } from '../../smart/booklist/booklist.component';

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
    @Inject(MAT_DIALOG_DATA) public data: IBookData
  ) {}
}
