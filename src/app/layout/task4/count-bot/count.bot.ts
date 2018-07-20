import { Component } from '@angular/core';
import {ChatService} from '../chat.service';
declare var require: any;

@Component({
  selector: 'countBot',
  template: ''
})
export class CountBot {

  initMessage = {
    avatar: 'https://robohash.org/esseeiusnisi.jpg?size=50x50&set=set1',
    name: 'Count Bot',
    body:'I will count the characters in your message'
  };

  constructor(private chatService: ChatService){
  }

  ngOnInit(){
    //TODO send INIT message
    //TODO listen future user messages
  }

  count(msg){
    //TODO count characters in message
    let sentence = 'Number of characters: ' + msg.length;
    this.sendMessage(sentence);
  }

  sendMessage(sentence){
    let message = {
      avatar: 'https://robohash.org/esseeiusnisi.jpg?size=50x50&set=set1',
      sender: 'count-bot',
      body: sentence
    };
    //TODO send the above message
  }

}
