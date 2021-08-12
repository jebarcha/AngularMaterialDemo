import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';

import { AddEditEmployeeComponent } from './components/add-edit-employee/add-edit-employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConfirmationComponent } from './components/shared/confirmation/confirmation.component';


import { ListEmployeeComponent } from './components/list-employee/list-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEditEmployeeComponent,
    NavbarComponent,
    ConfirmationComponent,
    ListEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
