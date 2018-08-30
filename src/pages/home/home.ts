import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mode: any;

  user: string;

  input = {message: ""};

  messages: Observable<any[]>;

  constructor(
    public navCtrl: NavController,
    public db: AngularFireDatabase
  ) {
    this.mode = 'global';

    this.user = 'Wellington';

    this.messages = this.db.list('/chats').valueChanges();
  }

  sendMessage(){
    this.db.list('/chats').push({
      user: this.user,
      text: this.input.message
    }).then( () => {
      //success
    });
    this.input.message = "";
  }

}
