import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController} from "ionic-angular";
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCrtl:AlertController) {}

  obj:Object = {};
  
  Login()
  {
    let alert = this.alertCrtl.create(
      {
        title: 'Bienvenido',
        message: 'Tu Heore es: Metal Knigh!',
        buttons: ['Ok']
      });
        alert.present();
    console.log(this.obj);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
