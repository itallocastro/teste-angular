import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import { ListarComponent } from './listar/listar.component';
import { SubgroupFormComponent } from './listar/subgroup-form/subgroup-form.component';
import {SubgrupoService} from "./servicos/subgrupo.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    SubgroupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [SubgrupoService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
