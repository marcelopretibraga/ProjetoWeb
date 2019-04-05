import { Component, OnInit, ViewChild } from '@angular/core';
import { Pessoa } from './models/pessoa';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatSort } from '@angular/material';
import { Telefone } from './models/telefone';

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
  public palavraChave: string;
  public isExpandido: number;
  public pessoaSelId: number;
  public pessoaSel: Pessoa = new Pessoa();
  public telefones: any;
  public telefone: Telefone;

  @ViewChild(MatPaginator) paginatorCustom: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.pessoa = new Pessoa();
    this.pessoas = new Array<Pessoa>();
    this.isExpandido = 1;
    this.carregaDadosFake();    
  }

  carregaDadosFake(){
    this.pessoa.pessoaId = 1;
    this.pessoa.nome = 'Marcelo Preti Braga';
    this.pessoa.idade = 27;
    this.pessoa.cpf = '0775694545487';
    this.pessoa.rg = '215154';

    this.telefones = new Array<Telefone>();
    this.telefone = new Telefone();
    this.telefone.telefoneId = 1;
    this.telefone.numero = '54544454454';
    this.telefones.push(this.telefone);
    this.telefone = new Telefone();

    this.telefone.telefoneId = 2;
    this.telefone.numero = '111111111';
    this.telefones.push(this.telefone);

    this.pessoa.telefones = this.telefones;
    this.pessoas.push(this.pessoa);

    this.pessoa = new Pessoa();
    this.pessoa.pessoaId = 2;
    this.pessoa.nome = 'Sem telefone';
    this.pessoa.idade = 27;
    this.pessoa.cpf = '0775694545487';
    this.pessoa.rg = '215154';
    this.pessoas.push(this.pessoa);

  }

  salvarPessoa(){
    console.log("Pessoa Salva")
    console.log(this.pessoa);
    this.pessoas.push(this.pessoa);
    console.log("Lista de Pessoas");
    console.log(this.pessoas);
    this.pessoa = new Pessoa(); //Instancia uma nova pessoa para não perder a referência da primeira0,

    //this.displayedColumns = ['pessoaId', 'nome', 'idade'];
    this.dataSource = new MatTableDataSource<Pessoa>(this.pessoas);
    this.dataSource.paginator = this.paginatorCustom;
    this.dataSource.sort = this.sort;
  }

  atualizarPessoa(){
    console.log("Pessoa atualizada");
  }

  aplicarFiltro(valor: string){
    valor = valor.trim(); // Remove whitespace
    valor = valor.toLowerCase();

    console.log("realiza o filtro com "+valor);
    this.dataSource.filterPredicate = (data: Pessoa, filter: string ) => 
      data.pessoaId.toString().indexOf(filter) != -1 ||
      data.nome.toLowerCase().indexOf(filter) != -1;
  
    this.dataSource.filter = valor;
  }

  setExpandido() {
    this.isExpandido = 1;
  }

  atualizarPessoaListbox(){
    console.log("Chamou atualizarPessoaListbox codigo ----------> "+this.pessoaSelId);
    let id = this.pessoaSelId;
    let pessoaSel;
    this.pessoas.forEach(function (item) {
      if (item.pessoaId == id) {
        pessoaSel = item;
        alert("Propriedade da pessoa selecionada "+item.telefones);
      }
    });
    this.pessoaSel = pessoaSel;
  }

}
