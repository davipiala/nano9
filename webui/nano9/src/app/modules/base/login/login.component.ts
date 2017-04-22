import { Component, OnInit } from '@angular/core';
import { User, Error } from '../model/model';
import { Form, FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service'

@Component({
  selector: 'b-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;
  public error: Error;
  public formLogin: FormGroup;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.user = new User();
    this.error = new Error();
    this.formLogin = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  login() {

    if (this.loginService.login(this.user)) {

      this.router.navigate(['home']);
    }
    else {
      this.error.hasError = true;
      this.error.errTitle = "Falha";
      this.error.errMsg = "Usuário/Senha inválidos!";
    }
  }
  cadastrar() {
    this.router.navigate(['usuarios']);
  }

}