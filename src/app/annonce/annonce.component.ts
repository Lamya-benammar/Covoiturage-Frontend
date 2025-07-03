import { Component } from '@angular/core';
import { TrajetService } from '../services/trajet.service'; // adapte le chemin si nécessaire

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent {
  userName = 'Ghannoudi Amal';

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

  vehicules = [
    { id: 1, marque: 'Toyota', immatricule: '123-2005' },
    { id: 2, marque: 'Ford', immatricule: '123-2005' },
    { id: 3, marque: 'Volkswagen', immatricule: '123-2005' },
  ];

  trajet = {
     conducteur: {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    phone: null,
    role: null
  },
    email: '',
    depart: '',
    destination: '',
    date: '',
    heure: '',
    nbPlaces: 1,
    prix: 0,
    vehicule: {
      immatricule: '',
      marque: ''
    },
    typeAnnonce: 'cherche'
  };

  selectedVehiculeId: number | null = null;

  userDropdownOpen = false;
  notifDropdownOpen = false;
  sidebarOpen = false;
  showToast = false;
userId= 1 ; 
vehiculeId=1;
  constructor(private trajetService: TrajetService) {}

  creerTrajet() {
    this.trajetService.createTrajet(this.userId, this.vehiculeId,this.trajet).subscribe({
      next: (data) => {
        this.showToast = true;
        setTimeout(() => {
          this.showToast = false;
        }, 3000);

       
        this.trajet = {
            conducteur: {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    phone: null,
    role: null
  },
          email: '',
          depart: '',
          destination: '',
          date: '',
          heure: '',
          nbPlaces: 1,
          prix: 0,
          vehicule: {
            immatricule: '',
            marque: ''
          },
          typeAnnonce: 'cherche'
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
