import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: string[] = [];

  add(message: string): void {
    this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
  }

  isEmpty(): boolean {
    // tslint:disable-next-line:triple-equals
    return this.messages.length == 0;
  }
}
