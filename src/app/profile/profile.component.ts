import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
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
  sidebarOpen = false;
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
