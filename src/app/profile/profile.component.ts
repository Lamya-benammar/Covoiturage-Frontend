import { Component } from '@angular/core';
import { TrajetService } from '../services/trajet.service';
import { Trajet } from '../services/trajet.service';
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
 email ='amalghannoudi@gmail.com'
 userId ='1'
  notifications: string[] = [
    'Votre trajet du 15 juin a été confirmé',
    'Nouveau message de Paul',
    'Rappel : paiement en attente',
  ];

  userDropdownOpen = false;
  notifDropdownOpen = false;
  sidebarOpen = false;
    trajets: Trajet[] = [];

  constructor(
    private trajetService: TrajetService,
  
  ) {}

  ngOnInit(): void {

  this.loadUserTrajets(this.userId);

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
 loadUserTrajets(userId: string): void {
  this.trajetService.getTrajetsParConducteur(userId).subscribe({
    next: (data) => this.trajets = data,
    error: (err) => console.error('Erreur chargement trajets', err)
  });
}

  modifierTrajet(trajet: Trajet): void {
    
  }

  deleteTrajet(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer ce trajet ?')) {
      this.trajetService.deleteTrajet(id).subscribe({
        next: () => {
          this.notifications.push('Trajet supprimé avec succès');
          this.trajets = this.trajets.filter(t => t.id !== id);
        },
        error: (err) => {
          console.error('Erreur suppression trajet', err);
          this.notifications.push('Erreur lors de la suppression');
        }
      });
    }
  }
}
