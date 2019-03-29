import { Component, OnInit, ViewChild } from '@angular/core';
import { Pessoa } from './models/pessoa';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatSort } from '@angular/material';



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

  @ViewChild(MatPaginator) paginatorCustom: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
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

}
