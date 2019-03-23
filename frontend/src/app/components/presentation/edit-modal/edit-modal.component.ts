import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "edit-modal",
  templateUrl: "./edit-modal.component.html",
  styleUrls: ["./edit-modal.component.scss"]
})
export class EditModalComponent {
  constructor(
    public dialogRef: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  public cancel(): void {
    this.dialogRef.close();
  }

  public save(): void {
    this.dialogRef.close();
    //save data
  }
}
