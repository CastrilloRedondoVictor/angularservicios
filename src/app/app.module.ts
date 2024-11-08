import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { ComicComponent } from './components/comic/comic.component';
import { NewComicComponent } from './components/new-comic/new-comic.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceComics } from './services/service.comics';
import { ServicePersona } from './services/service.persona';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LibreriaComponent,
    ComicComponent,
    NewComicComponent,
    PersonasapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceComics, ServicePersona],
  bootstrap: [AppComponent]
})
export class AppModule { }
