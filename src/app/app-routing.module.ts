import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './ems/home/home.component';
import { AddComponent } from './ems/add/add.component';
import { EditComponent } from './ems/edit/edit.component';
import { ShowComponent } from './ems/show/show.component';
import { LoginComponent } from './ems/login/login.component';
import { TiquetComponent } from './ems/tiquet/tiquet.component';
import { AddTiquetComponent} from './ems/add-tiquet/add-tiquet.component';
import { EditTiquetComponent} from './ems/edit-tiquet/edit-tiquet.component';

const routes: Routes = [
  {path:"", redirectTo:"/login", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"add", component:AddComponent},
  {path:"edit/:id", component:EditComponent},
  {path:"show/:id", component:ShowComponent},
  {path:"login", component:LoginComponent},
  {path:"tiquet", component:TiquetComponent},
  {path: "add-tiquet", component:AddTiquetComponent},
  {path: "edit-tiquet", component:EditTiquetComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
