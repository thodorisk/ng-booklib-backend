import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewBookComponent } from './components/smart/new-book/new-book.component';
import { EditBookComponent } from './components/smart/edit-book/edit-book.component';
import { BookListComponent } from './components/smart/booklist/booklist.component';

const routes: Routes = [
  { path: 'new', component: NewBookComponent},
  { path: 'edit/:id', component: EditBookComponent},
  { path: 'list', component: BookListComponent},
  { path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
