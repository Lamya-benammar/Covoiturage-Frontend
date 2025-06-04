import { Component, OnInit } from '@angular/core';
import { TrajetService, Trajet } from './../../services/trajet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
  userDropdownOpen = false;
  notifDropdownOpen = false;
    trajets: Trajet[] = [];

  constructor(private trajetService: TrajetService) {}

  ngOnInit(): void {
    this.loadAllTrajets();
  }

  loadAllTrajets() {
    this.trajetService.getAllTrajets().subscribe(data => {
      this.trajets = data;
    });
  }

onSearch() {
  this.trajetService.searchTrajets(
    this.search.depart,
    this.search.destination,
    this.search.date,
    this.search.passengers
  ).subscribe(result => {
    this.trajets = result;
  });
}


  consulterTrajet(trajet: Trajet) {
    // logique détails trajet
  }

  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {
    // timeout pour laisser le clic sur bouton déconnexion se faire
    setTimeout(() => {
      this.dropdownOpen = false;
    }, 150);
  }

  logout() {
    alert('Déconnexion effectuée (à implémenter)');
    // Ici tu peux appeler ton service d’authentification pour déconnecter l’utilisateur
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
