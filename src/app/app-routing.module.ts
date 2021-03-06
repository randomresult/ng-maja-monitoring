import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryComponent } from './entry/entry.component';


const routes: Routes = [
  {
    path: 'test',
    redirectTo: '/maja',
    pathMatch: 'full'
  },
  { path: '', component: EntryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
