import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SubgrupoService} from "../../servicos/subgrupo.service";
import {SubGrupoModel} from "../../models/subGrupo.model";

@Component({
  selector: 'app-subgroup-form',
  templateUrl: './subgroup-form.component.html',
  styleUrls: ['./subgroup-form.component.scss']
})
export class SubgroupFormComponent implements OnInit {

  param;
  selecionado = 1032;
  dado: SubGrupoModel = new SubGrupoModel();
  constructor(private route: ActivatedRoute, private router: Router, private subgrupoService: SubgrupoService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.param = params['id'];
      if(this.param) {
        this.conseguirDado();
      }
    });
  }
  conseguirDado() {
    this.subgrupoService.conseguirDado(this.param).subscribe((dado: any) => {
      this.dado.id = dado.resultado.id;
      this.dado.descricao = dado.resultado.descricao;
      this.dado.grupo_id = dado.resultado.grupo_id;
    }, (err) => {
      console.log(err);
    });
  }
  editarDado() {
    const fields = {
      id: this.dado.id,
      descricao: this.dado.descricao,
      grupo_id: this.selecionado
    };
    this.subgrupoService.updateDado(fields).subscribe((resultado) => {
      console.log(resultado);
      this.router.navigate(['listar']);
    });
  }
  inserirDado() {
    const fields = {
      // id: this.dado.id,
      descricao: this.dado.descricao,
      grupo_id: this.selecionado
    };
    this.subgrupoService.inserirDado(fields).subscribe((resultado) => {
      console.log(resultado);
      this.router.navigate(['listar']);
    });
  }

}
