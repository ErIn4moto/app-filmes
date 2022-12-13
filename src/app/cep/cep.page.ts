import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cep',
  templateUrl: './cep.page.html',
  styleUrls: ['./cep.page.scss'],
})
export class CepPage implements OnInit {

  constructor() { }

  ngOnInit() {}

  cep: string = "";
  estado: string = "";
  cidade: string = "";
  bairro: string = "";
  rua: string = "";

  buscarEndereco(){
    
    //"https://viacep.com.br/ws/"+this.cep+"/json/";
    let url =`https://viacep.com.br/ws/${this.cep}/json/`;
    //encontrando o estado
    fetch(url)//pega informações do site (a var url é o site em que está a informação do cep)
    .then((resposta)=>{
      return resposta.json();
    })
    .then((json)=> {
      this.estado=json.uf;

      switch(this.estado) {
        case 'SP':
        this.estado="São Paulo"
        break;

        case 'RO':
        this.estado="Rondônia"
        break;

        case 'AC':
        this.estado="Acre"
        break;

        case 'AM':
        this.estado="Amazonas"
        break;

        case 'PA':
        this.estado="Pará"
        break;

        case 'AP':
        this.estado="Amapá"
        break;

        case 'TO':
        this.estado="Tocantins"
        break;

        case 'MA':
        this.estado="Maranhão"
        break;

        case 'PI':
        this.estado="Piauí"
        break;

        case 'CE':
        this.estado="Ceará"
        break;

        case 'RN':
        this.estado="Rio Grande do Norte	"
        break;

        case 'PB':
        this.estado="Paraíba"
        break;

        case 'PE':
        this.estado="Pernambuco"
        break;

        case 'AL':
        this.estado="Alagoas"
        break;

        case 'SE':
        this.estado="Sergipe"
        break;

        case 'BA':
        this.estado="Bahia"
        break;

        case 'MG':
        this.estado="Minas Gerais"
        break;

        case 'ES':
        this.estado="Espírito Santo"
        break;

        case 'RJ':
        this.estado="Rio de Janeiro"
        break;

        case 'PR':
        this.estado="Paraná"
        break;

        case 'SC':
        this.estado="Santa Catarina"
        break;

        case 'RS':
        this.estado="Rio Grande do Sul"
        break;

        case 'MS':
        this.estado="Mato Grosso do Sul"
        break;

        case 'MT':
        this.estado="Mato Grosso"
        break;

        case 'GO':
        this.estado="Goiás"
        break;

        case 'DF':
        this.estado="Distrito Federal"
        break;
      }
      })
//encontrando a cidade
      fetch(url)
    .then((resposta)=>{
      return resposta.json();
    })  
    .then((json)=>{
this.cidade=json.localidade
    })
//encontrando o bairro
    fetch(url)
    .then((resposta)=>{
      return resposta.json();
    })  
    .then((json)=>{
this.bairro=json.bairro
    })
//encontrando a rua
    fetch(url)
    .then((resposta)=>{
      return resposta.json();
    })  
    .then((json)=>{
this.rua=json.logradouro
    })
  }

}