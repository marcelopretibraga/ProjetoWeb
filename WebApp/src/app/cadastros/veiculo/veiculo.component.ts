import { Component, OnInit, ViewChild } from '@angular/core';
import { Veiculo } from './models/veiculo';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Cor } from './models/cor';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {
  displayedColumns: string[] = ['actionsColumn', 'veiculoId', 'placa', 'renavan', 'chassi', 'marca', 'modelo', 'ano', 'cor'];
  
  public dataSource: any;
  public palavraChave: string;
  public veiculoModel: any; 
  public veiculos: Array<Veiculo> = new Array<Veiculo>();
  public cores: Array<Cor> = new Array<Cor>();
  public update: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.veiculoModel = new Veiculo();
    this.cores.push(new Cor(1, "Branco"));
    this.cores.push(new Cor(2, "Preto"));
    this.cores.push(new Cor(3, "Prata"));
  }

  aplicarFiltro(valor: string){
    valor = valor.trim(); // Remove whitespace
    valor = valor.toLowerCase();
    this.dataSource.filterPredicate = (data: Veiculo, filter: string ) => 
      data.veiculoId.toString().indexOf(filter) != -1 ||
      data.placa.toLowerCase().indexOf(filter) != -1 ||
      data.renavan.toString().indexOf(filter) != -1 ||
      data.chassi.toLowerCase().indexOf(filter) != -1 ||
      data.marca.toLowerCase().indexOf(filter) != -1 ||
      data.modelo.toLowerCase().indexOf(filter) != -1 ||
      data.ano.toString().indexOf(filter) != -1 ||
      data.cor.descricao.toLowerCase().indexOf(filter) != -1;
    this.dataSource.filter = valor;
  }

  salvar(){
    this.veiculos.push(this.veiculoModel);
    this.veiculoModel = new Veiculo(); //Instancia uma nova pessoa para não perder a referência da primeira0,
    this.atualizaTable();    
  }

  atualizar(){
    this.veiculos.splice(this.veiculos.findIndex(d => d.veiculoId === this.veiculoModel.veiculoId), 1); 
    this.veiculos.push(this.veiculoModel);
    this.veiculoModel = new Veiculo();
    this.atualizaTable();
    this.update = false;
  }

  atualizaTable(){
    this.dataSource = new MatTableDataSource<Veiculo>(this.veiculos);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  excluir(veiculoId: number){
    this.veiculos.splice(this.veiculos.findIndex(d => d.veiculoId === veiculoId), 1); 
    this.atualizaTable();   
  }

  editar(veiculoId: number){
    let veiculoUpdate;
    this.veiculos.forEach(item => {
      if (item.veiculoId == veiculoId) {
        veiculoUpdate = item;
      }
    });
    this.veiculoModel = veiculoUpdate;
    this.update = true;
  }

}
