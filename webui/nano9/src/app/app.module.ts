import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/base/login/login.component';
import { HomeComponent } from './modules/base/home/home.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AuthGuard } from './modules/base/auth/auth.guard';
import { routing } from './modules/base/route/app.routing';
import { HeaderComponent } from './modules/base/header/header.component';
import { LoginService } from './modules/base/service/login.service';
import { EdificioComponent } from './modules/cadastro/edificio/edificio.component';
import { EstacionamentoComponent } from './modules/cadastro/estacionamento/estacionamento.component';
import { HistoryComponent } from './modules/timeline/history/history.component';
import { PostComponent } from './modules/timeline/post/post.component';
import { FuncionariosComponent } from './modules/cadastro/funcionarios/funcionarios.component';
import { MoradoresComponent } from './modules/cadastro/moradores/moradores.component';
import { MapsComponent } from './modules/base/maps/maps.component';
import { ReservasComponent } from './modules/solicitacao/reservas/reservas.component';
import { ManutencoesComponent } from './modules/solicitacao/manutencoes/manutencoes.component';
import { UsuarioComponent } from './modules/cadastro/usuario/usuario.component';
import { RedeComponent } from './modules/cadastro/rede/rede.component';
import { RedeWorkflow1Component } from './modules/cadastro/rede/rede-workflow-1/rede-workflow-1.component';
import { RedeWorkflow2Component } from './modules/cadastro/rede/rede-workflow-2/rede-workflow-2.component';
import { RedeWorkflow3Component } from './modules/cadastro/rede/rede-workflow-3/rede-workflow-3.component';
import { ChatComponent } from './modules/base/chat/chat.component';
import { VisitantesComponent } from './modules/portaria/visitantes/visitantes.component';
import { PrestadoresComponent } from './modules/portaria/prestadores/prestadores.component';
import { EntregasComponent } from './modules/portaria/entregas/entregas.component';
import { DadosGeraisComponent } from './modules/consumo/dados-gerais/dados-gerais.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    EdificioComponent,
    EstacionamentoComponent,
    HistoryComponent,
    PostComponent,
    FuncionariosComponent,
    MoradoresComponent,
    MapsComponent,
    ReservasComponent,
    ManutencoesComponent,
    UsuarioComponent,
    RedeComponent,
    RedeWorkflow1Component,
    RedeWorkflow2Component,
    RedeWorkflow3Component,
    ChatComponent,
    VisitantesComponent,
    PrestadoresComponent,
    EntregasComponent,
    DadosGeraisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    Ng2SmartTableModule,
   AgmCoreModule.forRoot({ apiKey: 'AIzaSyB1cnH31mksVvJJGm04eu9NrfidKr_Ava8'})
  ],
  providers: [AuthGuard,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
