import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service'
@Component({
  selector: 'b-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public loginService: LoginService) { }
  ngOnInit() {
  }

}
