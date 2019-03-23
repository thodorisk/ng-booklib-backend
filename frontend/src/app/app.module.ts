import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookListComponent } from './components/smart/booklist/booklist.component';
import { NewBookComponent } from './components/smart/new-book/new-book.component';
import { EditBookComponent } from './components/smart/edit-book/edit-book.component';

import { MatToolbarModule, MatCardModule, MatProgressSpinnerModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatSnackBarModule, MatPaginator, MatPaginatorModule, MatTableModule, MatSortModule, MatDatepickerModule, MatSelectModule, MatDialogModule } from '@angular/material';
import { BookService } from './services/book/book.service';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/smart/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditModalComponent } from './components/presentation/edit-modal/edit-modal.component';
import { AddModalComponent } from './components/presentation/add-modal/add-modal.component';
import { DeleteModalComponent } from './components/presentation/delete-modal/delete-modal.component';

const routes: Routes = [
  { path: 'new', canActivate: [AuthGuard], component: NewBookComponent },
  { path: 'login', component: LoginComponent },
  { path: 'edit/:id', canActivate: [AuthGuard], component: EditBookComponent },
  { path: 'list', canActivate: [AuthGuard], component: BookListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    NewBookComponent,
    EditBookComponent,
    LoginComponent,
    EditModalComponent,
    DeleteModalComponent,
    AddModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [
    EditModalComponent,
    DeleteModalComponent,
    AddModalComponent
  ],
  providers: [BookService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
