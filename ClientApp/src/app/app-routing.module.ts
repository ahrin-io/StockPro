import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { SearchcontentComponent } from './searchcontent/searchcontent.component';
import { CryptoComponent } from './crypto/crypto.component';
import { MetalsComponent } from './Metals/metals.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'searchcontent', component: SearchcontentComponent },
  { path: 'crypto', component: CryptoComponent },
  { path: 'metals', component: MetalsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
