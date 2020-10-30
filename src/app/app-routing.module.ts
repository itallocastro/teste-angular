import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListarComponent} from "./listar/listar.component";
import {SubgroupFormComponent} from "./listar/subgroup-form/subgroup-form.component";


const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'criar', component: SubgroupFormComponent},
  {path: 'editar/:id', component: SubgroupFormComponent},
  {path: '', redirectTo: '/listar', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
