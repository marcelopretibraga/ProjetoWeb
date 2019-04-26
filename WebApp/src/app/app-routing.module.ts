import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaComponent} from './cadastros/pessoa/pessoa.component';
import { PagenotfoundComponent } from './erros/pagenotfound/pagenotfound.component';
import { VeiculoComponent } from './cadastros/veiculo/veiculo.component';


const routes: Routes = [
  {path: 'pessoa', component: PessoaComponent},
  {path: 'veiculo', component: VeiculoComponent},
  //{path: '', redirectTo: 'home'},
  {path: '**', component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
