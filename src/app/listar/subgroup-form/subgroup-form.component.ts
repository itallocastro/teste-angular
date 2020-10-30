import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SubgrupoService} from "../../servicos/subgrupo.service";
import {SubGrupoModel} from "../../models/subGrupo.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-subgroup-form',
  templateUrl: './subgroup-form.component.html',
  styleUrls: ['./subgroup-form.component.scss']
})
export class SubgroupFormComponent implements OnInit {

  param;
  selecionado = 1032;
  clicou = false;
  dado: SubGrupoModel = new SubGrupoModel();
  formGroup: FormGroup;
  constructor(private route: ActivatedRoute,
              private router: Router, private formBuilder: FormBuilder,
              private subgrupoService: SubgrupoService) { }

  ngOnInit(): void {
    this.criarForm();
    this.route.params.subscribe((params) => {
      this.param = params['id'];
      if(this.param) {
        this.conseguirDado();
      }
    });
  }

  criarForm() {
    this.formGroup = this.formBuilder.group({
      descricao: ['', [Validators.required]],
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
      this.clicou = true;
      // console.log(resultado);
      this.router.navigate(['listar']);
    }, (err) => {
      this.clicou = false;
      console.log(err);
    });
  }
  inserirDado() {
    const fields = {
      descricao: this.dado.descricao,
      grupo_id: this.selecionado
    };
    this.subgrupoService.inserirDado(fields).subscribe((resultado) => {
      this.clicou = true;
      // console.log(resultado);
      this.router.navigate(['listar']);
    }, (err) => {
      this.clicou = false;
    });
  }

}
