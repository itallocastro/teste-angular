import { Component, OnInit } from '@angular/core';
import {SubgrupoService} from "../servicos/subgrupo.service";
import {SubGrupoModel} from "../models/subGrupo.model";

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  lista: SubGrupoModel[] = [];
  constructor(private subgrupoService: SubgrupoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.subgrupoService.listar().subscribe((dados: any) => {
      this.lista = [];
      dados.resultado.forEach((dado) => {
        this.lista.push({
          id: dado.id,
          grupo_id: dado.grupo_id,
          n_grupo: dado.n_grupo,
          descricao: dado.descricao
        });
      });
      // console.log(dados);
    }, (err) => {
      console.log(err);
    });
  }
  inativar(id: number) {
    this.subgrupoService.inativar(id).subscribe((result) => {
      this.listar();
      // console.log(result);
    }, (err) => {
      console.log(err);
    });
  }

}
