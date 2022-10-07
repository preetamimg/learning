import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedElDirective } from './directives/red-el.directive';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MeComponent } from './about/me/me.component';
import { CompanyComponent } from './about/company/company.component';
import { ServicesComponent } from './services/services.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RedElDirective,
    HomeComponent,
    AboutComponent,
    MeComponent,
    CompanyComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
