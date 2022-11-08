import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { FilmesService } from '../service/filmes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  destaque: any =  [];
  filmes:any = [];
    

    constructor(private alertController: AlertController,
    public toastController: ToastController,
    private loadingCtrl: LoadingController,
    private filmesService: FilmesService,
    private rota: Router) {}

    ngOnInit(){
      console.log('passou no home');
       this.carregarFilmes();      
    }

    async carregarFilmes(){
      this.filmes  = await this.filmesService.getProductions();
      console.log("filmes carregados", this.filmes)
      const [firstKey] = Object.keys(this.filmes);
      this.destaque = this.filmes[firstKey];
      console.log("filmes destaque", this.destaque)
      this.filmes.splice(firstKey, 1)
      console.log('firstKey',firstKey)
      console.log('destaque',this.destaque)
      console.log('filmes',this.filmes)
    }
    
  detalhesFilme(paramID){
    console.log("passou "+paramID); 
    this.rota.navigate(['/detalhes', {id:paramID}])
  }
} 