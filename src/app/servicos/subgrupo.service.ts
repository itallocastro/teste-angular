import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const urlBase = 'https://api.clustererp.com.br';
const auth = 'Bearer 1234565629b5ac0ef32e0123abb7b692';
@Injectable({
  providedIn: 'root'
})
export class SubgrupoService {

  constructor(private httpClient: HttpClient) { }

  listar() {
    return this.httpClient.post(
      `${urlBase}/subgrupo/listar/`,
      { ativo: true },
      {headers: {Authorization: auth}});
  }

  inativar(id: number) {
    this.httpClient.delete(`${urlBase}/subgrupo/${id}/`, {headers: {Authorization: auth, 'log-motivo': 'estou inativando porque o cadastro esta errado'}}).subscribe((teste) => {
      this.listar();
      console.log(teste);
    }, (err) => {
      console.log(err);
    })
  }

  conseguirDado(id: number) {
    return this.httpClient.get(`${urlBase}/subgrupo/${id}/`, {headers: {Authorization: auth}});
  }

  updateDado(dado) {
    return this.httpClient.put(`${urlBase}/subgrupo/${dado.id}/`, dado, {headers: {Authorization: auth}});
  }

  inserirDado(dado) {
    return this.httpClient.post(`${urlBase}/subgrupo/`, dado, {headers: {Authorization: auth}});
  }



}
