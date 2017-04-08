import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Listado page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-listado',
  templateUrl: 'listado.html'
})
export class ListadoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  heroes = ["Tyrael","Diablo","Xul","Malthael","Azmodan"];
  
  Agregar()
  {
    console.log("implementar...");
  }
  Salir()
  {
    console.log("implementar...");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoPage');
  }

}
