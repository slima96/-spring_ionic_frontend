import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { API_CONFIG } from '../../config/api.config';
import { PessoaDTO } from '../../models/pessoa.dto';
import { PessoaService } from '../../services/domain/pessoa.service';
import { StorageService } from '../../services/storage.service';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  pessoa: PessoaDTO;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: StorageService,
    public pessoaService: PessoaService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if(localUser && localUser.usuario){
      this.pessoaService.findByUsuario(localUser.usuario)
        .subscribe(response => {
          this.pessoa = response;
          this.getImageIfExists();
        },
        error =>{
          if (error.status == 403){
            this.navCtrl.setRoot('HomePage');
          }
        });
    }
    else {
      this.navCtrl.setRoot('HomePage');
    }
  }

  getImageIfExists(){
    this.pessoaService.getImageFromBucket(this.pessoa.id)
      .subscribe(response => {
        this.pessoa.imageUrl = `${API_CONFIG.bucketBaseUrl}/user${this.pessoa.id}.jpg`;
      },
      error =>{});
  }

}