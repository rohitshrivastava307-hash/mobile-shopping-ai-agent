import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {


    message: string = '';

  response: any;

  constructor(private chatService: ChatService) {}

  sendMessage() {

    this.chatService.sendMessage(this.message)
      .subscribe((data) => {

        console.log(data);

        this.response = data;

      });

  }

}
