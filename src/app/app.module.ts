import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component'; 
import { AppRoutingModule } from './app-routing.module';
import { AnnonceComponent } from './annonce/annonce.component';
import { ProfileComponent } from './profile/profile.component';
import { TrajetDetailsModalComponent } from './trajet-details-modal/trajet-details-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    AnnonceComponent,
    ProfileComponent,
    TrajetDetailsModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent } 
    ]),
    AppRoutingModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
