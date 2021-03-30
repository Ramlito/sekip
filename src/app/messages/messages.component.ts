import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-messages',
  template: `
    <!--
      <hr>
      <h2> Liste des messages</h2>
      <ul *ngFor = "let message of messages">
        <li>{{message}}</li>
      </ul>
      -->
    <hr>
    <p-panel header="Message" [toggleable]="true">
            <p-listbox [options]="messages" ></p-listbox>
    </p-panel>



<!--
      <p-panel header="Messages"  [toggleable]="true">
          <p-listbox [options]="messages"></p-listbox>
      </p-panel>
-->
  `,
  styles: [
  ]
})
export class MessagesComponent implements OnInit {
  @Input() messages;
  constructor() { }

  ngOnInit(): void {
  }

}
