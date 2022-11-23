import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.page.html',
  styleUrls: ['./cep.page.scss'],
})
export class CepPage implements OnInit {

  cep: string ="";
  estado:string="";
  cidade:string="";
  bairro:string="";
  rua:string="";

  constructor() { }

  ngOnInit() {  }

  buscarEndereco(){
    alert(this.cep);
  }

}
