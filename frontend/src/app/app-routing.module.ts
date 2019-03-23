import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewBookComponent } from './components/smart/new-book/new-book.component';
import { EditBookComponent } from './components/smart/edit-book/edit-book.component';
import { BookListComponent } from './components/smart/booklist/booklist.component';
import { LoginComponent } from './components/smart/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  { path: 'new', component: NewBookComponent},
  { path: 'edit/:id', component: EditBookComponent},
  { path: 'list', component: BookListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
