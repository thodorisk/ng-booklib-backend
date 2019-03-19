import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookListComponent } from './components/booklist/booklist.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';

import { MatToolbarModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { BookService } from './services/book.service';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'new', canActivate: [AuthGuard], component: NewBookComponent },
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BookService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
