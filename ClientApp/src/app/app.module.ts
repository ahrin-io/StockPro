import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'angular2-chartjs';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopnavComponent } from './topnav/topnav.component';
import { ContentComponent } from './content/content.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { CryptoComponent } from './crypto/crypto.component';
import { MetalsComponent } from './Metals/metals.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchcontentComponent } from './searchcontent/searchcontent.component';
import { ClickOutsideDirective } from './click-outside.directive';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopnavComponent,
    ContentComponent,
    HomeComponent,
    NewsComponent,
    SearchbarComponent,
    SearchcontentComponent,
    ClickOutsideDirective,
    CryptoComponent,
    MetalsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    ]),
    AppRoutingModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
