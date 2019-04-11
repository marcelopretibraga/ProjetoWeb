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

  displayedColumns: string[] = ['actionsColumn', 'pessoaId', 'nome', 'idade', 'cpf', 'rg'];
  
  public pessoaModel: Pessoa = new Pessoa();
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
    this.pessoas = new Array<Pessoa>();
    this.isExpandido = 1;
    this.carregaDadosFake();    
  }

  carregaDadosFake(){
    this.pessoaModel.pessoaId = 1;
    this.pessoaModel.nome = 'Marcelo Preti Braga';
    this.pessoaModel.idade = 27;
    this.pessoaModel.cpf = '0775694545487';
    this.pessoaModel.rg = '215154';

    this.telefones = new Array<Telefone>();
    this.telefone = new Telefone();
    this.telefone.telefoneId = 1;
    this.telefone.numero = '54544454454';
    this.telefones.push(this.telefone);
    this.telefone = new Telefone();

    this.telefone.telefoneId = 2;
    this.telefone.numero = '111111111';
    this.telefones.push(this.telefone);

    this.pessoaModel.telefones = this.telefones;
    this.pessoas.push(this.pessoaModel);

    this.pessoaModel = new Pessoa();
    this.pessoaModel.pessoaId = 2;
    this.pessoaModel.nome = 'Sem telefone';
    this.pessoaModel.idade = 27;
    this.pessoaModel.cpf = '0775694545487';
    this.pessoaModel.rg = '215154';
    this.pessoas.push(this.pessoaModel);

  }

  salvarPessoa(){
    console.log("Pessoa Salva")
    console.log(this.pessoaModel);
    this.pessoas.push(this.pessoaModel);
    console.log("Lista de Pessoas");
    console.log(this.pessoas);
    this.pessoaModel = new Pessoa(); //Instancia uma nova pessoa para não perder a referência da primeira0,

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
    let pessoaSelLocal;
    this.pessoas.forEach(function (item) {
      if (item.pessoaId == id) {
        pessoaSelLocal = item;
        alert("Propriedade da pessoa selecionada "+item.telefones);
      }
    });
    this.pessoaSel = pessoaSelLocal;
  }

  excluir(pessoaId: number){
    alert("Excluiiiiiiiiiiiiiiiiiir ===>"+pessoaId);
    
  }

  editar(pessoaId: number){
    alert("Editarrrrrrrrrrrr ==> "+pessoaId);
    let pessoaUpdate;
    this.pessoas.forEach(item => {
      if (item.pessoaId == pessoaId) {
        pessoaUpdate = item;
      }
    });
    this.pessoaModel = pessoaUpdate;
  }

}
