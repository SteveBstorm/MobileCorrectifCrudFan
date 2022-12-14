import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {path : 'create', component : CreateComponent},
  {path : 'list', component : ListComponent},
  {path : 'detail/:id', component : DetailComponent},
  {path : 'update/:id', component : UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
