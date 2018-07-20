import { Component } from '@angular/core';
import {ChatService} from './chat.service';
declare var require: any;
declare var jQuery: any;

@Component({
  selector: 'task4',
  templateUrl: './task4.template.html',
  styleUrls: ['./task4.style.scss']
})
export class Task4Component {
  omegaLogo = require('../../../assets/img/04_crop.png');
  target = require('../../../assets/targets/task4.png');
  userAvatar = require('../../../assets/img/student.png');

  messageList =[];

  showPreview = false;
  newMessage = '';

  constructor(private chatService: ChatService){
  }

  ngOnInit(){
    //TODO listen to all new messages
  }

  addMessage(){
    let message = {
      avatar: this.userAvatar,
      sender: 'user',
      body:this.newMessage
    };
    //TODO send the above message
    this.newMessage = '';
  }

}
