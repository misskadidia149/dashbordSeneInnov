import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent implements OnInit{


  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
    //this.listeFeedback();
  }


}
