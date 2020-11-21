import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    public formBuilder: FormBuilder) {

      this.formGroup = this.formBuilder.group({
        nome: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        usuario: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(30)]]
        //email: [Validators.required, Validators.email]
      })
  }

  signupUser(){
    console.log('enviou o formulário')
  }

}
