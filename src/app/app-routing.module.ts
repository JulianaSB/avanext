import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { ExtractComponent } from './extract/extract.component';
import { LoggedGuard } from './shared/guard/logged.guard';
import { HomeComponent } from './home/home.component';
import { DetailsExtractComponent } from './extract/details-extract/details-extract.component';
import { TransferComponent } from './transfer/transfer.component';
import { ConfirmComponent } from './transfer/confirm/confirm.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path: 'home', component: ContentComponent
}, {
  path: 'home-logada', component: HomeComponent, canActivate: [LoggedGuard]
}, {
  path: '', pathMatch: 'full', redirectTo: 'home'
}, {
  path: 'login', component: LoginComponent
}, {
  path: 'extract',
  component: ExtractComponent, canActivate: [LoggedGuard]
},{
  path: 'transfer',
  component: TransferComponent, canActivate: [LoggedGuard]
}, {
  path: 'extract/details/:idTransacao',
  component: DetailsExtractComponent, canActivate: [LoggedGuard]
} ,  {
  path: 'confirm',
  component: ConfirmComponent, canActivate: [LoggedGuard]
}, {
  path: 'nao-encontrado', component: NaoEncontradoComponent
}, {
  path: '**', redirectTo: 'nao-encontrado'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
