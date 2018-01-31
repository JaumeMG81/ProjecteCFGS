import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './ems/navbar/navbar.component';
import { HomeComponent } from './ems/home/home.component';
import { AddComponent } from './ems/add/add.component';
import { EditComponent } from './ems/edit/edit.component';
import { ShowComponent } from './ems/show/show.component';
import { EmpService } from './ems/emp.service';
import { LoginComponent } from './ems/login/login.component';
import { TiquetComponent } from './ems/tiquet/tiquet.component';
import { EditTiquetComponent } from './ems/edit-tiquet/edit-tiquet.component';
import { AddTiquetComponent } from './ems/add-tiquet/add-tiquet.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddComponent,
    EditComponent,
    ShowComponent,
    LoginComponent,
    TiquetComponent,
    EditTiquetComponent,
    AddTiquetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
