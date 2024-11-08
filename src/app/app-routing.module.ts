import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { NewComicComponent } from './components/new-comic/new-comic.component';

const routes: Routes = [
  {path: 'libreria', component: LibreriaComponent},
  {path: 'nuevocomic', component: NewComicComponent},
  {path: '**', redirectTo: 'libreria'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
