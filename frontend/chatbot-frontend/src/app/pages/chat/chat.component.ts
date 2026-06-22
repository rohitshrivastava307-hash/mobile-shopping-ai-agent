import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {


    message: string = '';
    loading = false;

  response: any;

  constructor(private chatService: ChatService) {}

 sendMessage() {

  
  this.response = null;
  this.loading = true;  

  this.chatService.sendMessage(this.message)
    .subscribe((data) => {

      this.response = data;
      this.loading = false;

    }, (error) => {

      console.error(error);
      this.loading = false;

    });

}

}
