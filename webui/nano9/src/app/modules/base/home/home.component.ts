import { Component, OnInit } from '@angular/core';
import {HistoryComponent} from '../../timeline/history/history.component';
import {ChatComponent } from  '../chat/chat.component'
@Component({
  selector: 'b-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lng: number = -46.709097;
  lat: number = -23.627678;
  zoom: number = 18;
  condominio: string ="Meu condominio";
  constructor() { }

  ngOnInit() {


  }

}
