import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

   private apiUrl = 'http://localhost:3000/api/chat';
  http=inject(HttpClient)
  sendMessage(msg:any){
    return this.http.post(this.apiUrl,{msg})
  }
}
