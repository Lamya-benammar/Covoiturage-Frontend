import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { ProfileComponent } from './profile/profile.component';
import { TrajetDetailsModalComponent } from './modals/trajet-details-modal/trajet-details-modal.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddVehiculeModalComponent } from './modals/add-vehicule-modal/add-vehicule-modal.component';
import { EditVehiculeModalComponent } from './modals/edit-vehicule-modal/edit-vehicule-modal.component';
import { EditAnnonceModalComponent } from './modals/edit-annonce-modal/edit-annonce-modal.component';
import { EditInfoModalComponent } from './modals/edit-info-modal/edit-info-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AppComponent,
    HomeComponent,
    SidebarComponent,
    AnnonceComponent,
    ProfileComponent,
    TrajetDetailsModalComponent,
    AppComponent,
    SignupComponent,
    LoginComponent,
    AddVehiculeModalComponent,
    EditVehiculeModalComponent,
    EditAnnonceModalComponent,
    EditInfoModalComponent
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
