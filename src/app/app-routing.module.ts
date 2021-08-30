import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';

const routes: Routes = [
  { path: '', redirectTo: 'peliculas', pathMatch: 'full' },
  { path:"peliculas", component: PeliculasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
