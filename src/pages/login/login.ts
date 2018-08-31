import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { HomePage } from '../home/home';

import firebase from 'firebase';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, public viewCtrl: ViewController) {
  }

  login(){
    // if(this.user){
    //   localStorage.setItem('user', this.user);
    //   this.appCtrl.getRootNav().push(HomePage);
    //   this.viewCtrl.dismiss();
    // }
    let provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithRedirect(provider).then((result) => {
      alert(JSON.stringify(result))
    }).catch(function(error){
      alert(JSON.stringify(error))
    });
  }

}
