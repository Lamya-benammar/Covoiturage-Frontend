import { Component, OnInit } from '@angular/core';
import { TrajetService } from '../services/trajet.service';
import { Trajet } from '../services/trajet.service';
import { VehiculeService, Vehicule } from '../services/vehicule.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
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
   nom = 'Ben Ali';
  prenom = 'Ahmed';

  annonces = [
    { depart: 'Tunis', destination: 'Sousse', date: '2025-07-10', heure: '08:00', nbPlaces: 2 , prix : 10, etat: 'Complet'},
    { depart: 'Nabeul', destination: 'Tunis', date: '2025-07-12', heure: '18:00', nbPlaces: 1 , prix : 7 ,etat:'En attente'}
  ];
vehicule: Vehicule = { id:0 , marque: '', immatriculation: '' };
nouveauVehicule = {
  marque: '',
  immatriculation: '',
};

noVehiculeMessage: boolean = false;


  userDropdownOpen = false;
  notifDropdownOpen = false;
  sidebarOpen = false;
    trajets: Trajet[] = [];
vehicules: Vehicule[] = [];

  constructor(
    private trajetService: TrajetService,
     private vehiculeService :VehiculeService
  
  ) {}

  ngOnInit(): void {

  this.loadUserTrajets(this.userId);
  this.loadVehicule(); 

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
   modifierInfos() {
    // ouvrir un formulaire modal ou rediriger vers une page de modification
  }

  gererAnnonces() {
    // rediriger vers la gestion des annonces
  }

  modifierVehicule() {
    // ouvrir un formulaire modal pour modifier la voiture
  }


loadVehicule(): void {
  let id = 1;
  this.vehiculeService.getVehiculeByUserId(id).subscribe({
    next: (data: Vehicule[]) => {
      this.vehicules = data;
      this.noVehiculeMessage = this.vehicules.length === 0;
    },
    error: (err: any) => {
      console.error('Erreur chargement véhicules', err);
      this.noVehiculeMessage = true;  // ou un autre message d'erreur
    }
  });
}



  onDeleteVehicule(id: number) {
    this.vehiculeService.deleteVehicule(id).subscribe({
      next: () => {
        this.vehicules = this.vehicules.filter(v => v.id !== id);
      },
      error: err => {
        console.error('Erreur lors de la suppression', err);
      }
    });
  }ajouterVehicule(): void {
  const userId = 1; 
  const vehiculeAvecId = {
    id: Math.floor(Math.random() * 100000), 
    ...this.nouveauVehicule
  };

  this.vehiculeService.addVehicule(userId, vehiculeAvecId).subscribe({
    next: (res) => {
      console.log('Véhicule ajouté:', res);
      this.loadVehicule();
      this.nouveauVehicule = { marque: '', immatriculation: '' }; 
    },
    error: (err) => console.error('Erreur ajout véhicule:', err)
  });
}
}
