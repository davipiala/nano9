import { Injectable } from '@angular/core';
import { User, Error } from '../model/model';

@Injectable()
export class LoginService {
  public user: User;

  constructor() { 
    this.user = new User();
    this.user.password = "senha";
    this.user.username = "davi";
    this.user.name = "Davi Piala";

  }
  login(p_user: User){
     
    if (this.user.username == p_user.username &&
    this.user.password == p_user.password) {          
      localStorage.setItem('currentUser', 'davi');
      return true
    }
    return false;
  }
  logout(){
      alert("teste");
      localStorage.removeItem('currentUser');
      alert("teste");
  }

}
