import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { HistoryComponent } from '../../../modules/timeline/history/history.component';
import { AuthGuard } from '../auth/auth.guard';
import { EdificioComponent } from '../../cadastro/edificio/edificio.component';
import { FuncionariosComponent } from '../../cadastro/funcionarios/funcionarios.component';
import { MoradoresComponent } from '../../cadastro/moradores/moradores.component';
import { ManutencoesComponent } from '../../solicitacao/manutencoes/manutencoes.component'
import { ReservasComponent } from '../../solicitacao/reservas/reservas.component'
import { UsuarioComponent } from '../../cadastro/usuario/usuario.component'
import { RedeComponent } from '../../cadastro/rede/rede.component'


const appRoutes: Routes = [

    { path: '', pathMatch: 'full', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'timeline', component: HistoryComponent },
    { path: 'edificio', component: EdificioComponent },
    { path: 'funcionarios', component: FuncionariosComponent },
    { path: 'moradores', component: MoradoresComponent },
    { path: 'reservas', component: ReservasComponent },
    { path: 'manutencoes', component: ManutencoesComponent },
    { path: 'usuarios', component: UsuarioComponent },
    { path: 'redes', component: RedeComponent },

    { path: '**', redirectTo: 'not-found' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);