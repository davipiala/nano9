import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../base/model/user';
import { Form, FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public user: User;
  public formRede: FormGroup;

  constructor(private router: Router) {  }

  ngOnInit() {

    this.user = new User();

    this.formRede = new FormGroup({
      username: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }

  cadastrarRede() {
    alert("teste");
    this.router.navigate(['redesWorkflow1']);
  }
}
