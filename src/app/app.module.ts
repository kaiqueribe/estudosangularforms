import {NgModule, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SucessoCadastroComponent } from './sucesso-cadastro/sucesso-cadastro.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, CadastroComponent, SucessoCadastroComponent],
  imports: [BrowserModule, AppRoutingModule, MatCardModule, ReactiveFormsModule,MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {


}
