import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

/*
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';ç
*/
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// servicios
import { ListaDeseosService } from './services/lista-deseos.service';

// components
import { PendientesComponent } from './../pages/pendientes/pendientes.component';
import { TerminadosComponent } from './../pages/terminados/terminados.component';
import { AgregarComponent } from './../pages/agregar/agregar.component';

// pipes
import { PlaceholderPipe } from './../app/pipes/placeholder.pipe';


@NgModule({
  declarations: [
    MyApp,
    PlaceholderPipe,
    /*AboutPage,
    ContactPage,
    HomePage,*/
    TabsPage,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    /*AboutPage,
    ContactPage,
    HomePage,*/
    TabsPage,
    PendientesComponent,
    TerminadosComponent,
    AgregarComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaDeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
