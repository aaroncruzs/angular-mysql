import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//RUTAS
import{APP_ROUTING} from './app.routes';

//SERVICIOS

//COMPONENETES
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';
import { HomeComponent }    from './component/home/home.component';
import { NavbarComponent }  from './component/shared/navbar/navbar.component';
import { FooterComponent }  from './component/shared/footer/footer.component';
import { AboutComponent }   from './component/about/about.component';
import { DetailComponent } from './component/detail/detail.component';
import { BrowseComponent } from './component/browse/browse.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    DetailComponent,
    BrowseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
