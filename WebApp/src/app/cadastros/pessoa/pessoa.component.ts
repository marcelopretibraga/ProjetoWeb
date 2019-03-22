import { Component, OnInit } from '@angular/core';
import { Pessoa } from './models/pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  displayedColumns: string[] = ['pessoaId', 'nome', 'idade', 'cpf', 'rg'];
  
  public pessoa: Pessoa = new Pessoa;
  public pessoas: Array<Pessoa>;
  public dataSource: any;

  constructor() { }

  ngOnInit() {
    this.pessoa = new Pessoa();
    this.pessoas = new Array<Pessoa>();
  }

  salvarPessoa(){
    console.log("Pessoa Salva")
    console.log(this.pessoa);
    this.pessoas.push(this.pessoa);
    console.log("Lista de Pessoas");
    console.log(this.pessoas);
    this.pessoa = new Pessoa(); //Instancia uma nova pessoa para não perder a referência da primeira0,

    //this.displayedColumns = ['pessoaId', 'nome', 'idade'];
    this.dataSource = this.pessoas;

  }

  atualizarPessoa(){
    console.log("Pessoa atualizada");
  }


}
