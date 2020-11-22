import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpresaDTO } from '../../models/empresa.dto';
import { EmpresaService } from '../../services/domain/empresa.service';
import { API_CONFIG } from "../../config/api.config";


@IonicPage()
@Component({
  selector: 'page-empresas',
  templateUrl: 'empresas.html',
})
export class EmpresasPage {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  items: EmpresaDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public empresaService: EmpresaService) {
  }


  ionViewDidLoad() {
    this.empresaService.findAll()
      .subscribe(response =>{
        this.items = response;
      },
      error =>{});
    }
}
