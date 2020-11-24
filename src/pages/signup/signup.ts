import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { PessoaService } from '../../services/domain/pessoa.service';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public pessoaService: PessoaService,
    public alertCtrl: AlertController) {

      this.formGroup = this.formBuilder.group({
        nome: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        usuario: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
        senha:['123', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]]
        //email: [Validators.required, Validators.email]
      })
  }

  signupUser(){
    this.pessoaService.insert(this.formGroup.value)
      .subscribe(response => {
        this.showInsertOk();
      },
      error =>{});
  }

  showInsertOk(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Cadastro efetuado com sucesso',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.setRoot('HomePage');
          }
        }
      ]
    });
    alert.present();
  }
}