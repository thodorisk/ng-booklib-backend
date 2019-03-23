import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "add-modal",
  templateUrl: "./add-modal.component.html",
  styleUrls: ["./add-modal.component.scss"]
})
export class AddModalComponent {
  constructor(
    public dialogRef: MatDialogRef<AddModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public cancel(): void {
    this.dialogRef.close();
  }

  public add(): void {
    this.dialogRef.close();
    //save data
  }
}
