import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { Http } from "@angular/http";
@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

public source: LocalDataSource;
  public settings = {
    columns: {
      id: {
        title: 'Id'
      },
      name: {
        title: 'Nome'
      },
      username: {
        title: 'Usuário'
      },
      email: {
        title: 'e-mail'
      }
    },
    edit: {
      editButtonContent: "Editar",
      saveButtonContent: 'Atualizar',
      cancelButtonContent: 'Cancelar'
    },
    delete: {
      deleteButtonContent: "Remover"
    },
    actions: {
      columnTitle: "Ações",
      add: false
    }
  };
  public data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];
  constructor(private http: Http) {
    this.source = new LocalDataSource(this.data);
  }


  ngOnInit() {
  }

}
