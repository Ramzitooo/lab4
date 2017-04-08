import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Formulario page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html'
})
export class FormularioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  usuario:Object = {};

  Guardar()
  {
    console.log(this.usuario);
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

}
