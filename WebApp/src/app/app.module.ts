import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaComponent } from './cadastros/pessoa/pessoa.component';
import { PagenotfoundComponent } from './erros/pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatRadioModule, MatButtonModule, 
         MatTableModule, MatIconModule, MatPaginatorModule, MatSort, MatSortModule, MatExpansionModule, MatSelectModule } from '@angular/material';
import { VeiculoComponent } from './cadastros/veiculo/veiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    PagenotfoundComponent,
    VeiculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    BrowserAnimationsModule, //Daqui pra baixo são componentes do material
    MatInputModule,
    MatRadioModule,
    MatButtonModule, 
    MatTableModule, 
    MatIconModule, 
    HttpClientModule, //Adicionei aqui (icone) //from '@angular/common/http';
    MatPaginatorModule, 
    MatSortModule, 
    MatExpansionModule, 
    MatSelectModule

  ],
  providers: [HttpClient], //Adicionei aqui (icone)
  bootstrap: [AppComponent]
})
export class AppModule { }
