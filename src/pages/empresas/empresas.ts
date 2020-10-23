import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpresaService } from '../../services/domain/empresa.service';


@IonicPage()
@Component({
  selector: 'page-empresas',
  templateUrl: 'empresas.html',
})
export class EmpresasPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public empresaService: EmpresaService) {
  }


  ionViewDidLoad() {
    this.empresaService.findAll()
      .subscribe(response =>{
        console.log(response);
      },
      error =>{
        console.log(error);
      });
    }
}
