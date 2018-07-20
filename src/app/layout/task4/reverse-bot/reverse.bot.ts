import { Component } from '@angular/core';
import {ChatService} from '../chat.service';
declare var require: any;

@Component({
  selector: 'reverseBot',
  template: ''
})
export class ReverseBot {

  initMessage = {
    avatar: 'https://robohash.org/utnihilexplicabo.png?size=50x50&set=set1',
    name: 'Reverse Bot',
    body:'I will reverse everything you say'
  };

  constructor(private chatService: ChatService){
  }

  ngOnInit(){
    //TODO send INIT message
    //TODO listen future user messages
  }

  reverse(msg){
    //TODO reverse the msg received
  }

  sendMessage(msg){
    let message = {
      avatar: 'https://robohash.org/utnihilexplicabo.png?size=50x50&set=set1',
      sender: 'reverse-bot',
      body: msg
    };
    //TODO send the above message
  }

}
