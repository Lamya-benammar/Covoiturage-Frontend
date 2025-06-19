import { Component } from '@angular/core';
import { TrajetService } from '../services/trajet.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent {
  userName = 'Ghannoudi Amal ';
  search = {
    depart: '',
    destination: '',
    date: '',
    passengers: 1
  };

  notifications: string[] = [
    'Votre trajet du 15 juin a été confirmé',
    'Nouveau message de Paul',
    'Rappel : paiement en attente',
  ];
trajet = {
    conducteur: '',
    email: '',
    depart: '',
    destination: '',
    date: '',
    heure: '',
    nbPlaces: 1,
    prix: 0,
  };
  userDropdownOpen = false;
  notifDropdownOpen = false;
  sidebarOpen = false;
  showToast = false;

 

  constructor(private trajetService: TrajetService) {}

  creerTrajet() {
    this.trajetService.createTrajet(this.trajet).subscribe({
      next: (data) => {
  
        this.showToast = true;
        setTimeout(() => {
          this.showToast = false;
        }, 3000);
        this.trajet = {
          conducteur: '',
          email: '',
          depart: '',
          destination: '',
          date: '',
          heure: '',
          nbPlaces: 1,
          prix: 0,
        };
      },
      error: (err) => alert('Erreur lors de la création : ' + err.message),
    });
  }

  logout() {
    alert('Déconnexion effectuée (à implémenter)');
  }

  toggleUserDropdown() {
    this.userDropdownOpen = !this.userDropdownOpen;
    if (this.userDropdownOpen) this.notifDropdownOpen = false;
  }

  closeUserDropdown() {
    setTimeout(() => {
      this.userDropdownOpen = false;
    }, 150);
  }

  toggleNotifDropdown() {
    this.notifDropdownOpen = !this.notifDropdownOpen;
    if (this.notifDropdownOpen) this.userDropdownOpen = false;
  }

  closeNotifDropdown() {
    setTimeout(() => {
      this.notifDropdownOpen = false;
    }, 150);
  }
}