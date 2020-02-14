import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HeaderComponent } from './header/HeaderComponent';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './shared/interfaces/footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ExtractComponent } from './extract/extract.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './loader/loader.component';
import { DetailsExtractComponent } from './extract/details-extract/details-extract.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
registerLocaleData(localePt, 'pt');
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TransferComponent } from './transfer/transfer.component';
import { ConfirmComponent } from './transfer/confirm/confirm.component';
import { RegisterComponent } from './register/register.component';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxCurrencyModule } from 'ngx-currency';
import { Util } from './shared/utils/util.utilities';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    ExtractComponent,
    NaoEncontradoComponent,
    HomeComponent,
    LoaderComponent,
    DetailsExtractComponent,
    SidenavComponent,
    TransferComponent,
    ConfirmComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    TextMaskModule,
    NgxCurrencyModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

