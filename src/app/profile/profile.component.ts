import { Component, OnInit } from '@angular/core';
import { TrajetService } from '../services/trajet.service';
import { VehiculeService } from '../services/vehicule.service';
import { Vehicule } from 'src/app/models/vehicule.model';
import { Trajet } from '../models/trajet.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // --- Infos utilisateur ---
  userId = '1';
  userName = 'Ghannoudi Amal';
  email = 'amalghannoudi@gmail.com';
  nom = 'Ghannoudi';
  prenom = 'Amal';
  phone = '12345678';

  // --- Notifications ---
  notifications: string[] = [
    'Votre annonce#1 est vue par 7 personnes',
    'Votre annonce#2 est réservée par Iskander Hableni'
  ];

  // --- États UI ---
  userDropdownOpen = false;
  notifDropdownOpen = false;
  sidebarOpen = false;
  noVehiculeMessage = false;

  // --- Données ---
  trajets: Trajet[] = [];
  vehicules: Vehicule[] = [];
    users: User[] = [];

  annonces = [
    { id :1 , depart: 'Tunis', destination: 'Sousse', date: '2025-07-10', heure: '08:00', nbPlaces: 2, prix: 10, etat: 'Complet' },
    { id :2 ,depart: 'Nabeul', destination: 'Tunis', date: '2025-07-12', heure: '18:00', nbPlaces: 1, prix: 7, etat: 'En attente' }
  ];

  // --- Recherche ---
  search = {
    depart: '',
    destination: '',
    date: '',
    passengers: 1
  };

  // --- Formulaires/modifications ---
  nouveauVehicule: Partial<Vehicule> = { marque: '', immatricule: '' };
  selectedVehicule: Vehicule | null = null;
  vehiculeModifie: Vehicule = { id: 0, marque: '', immatricule: '' };
  vehiculeSelectionne: Vehicule | null = null;

  selectedAnnonce: Trajet | null = null;
  annonceSelectionne: Trajet | null = null;
    userSelectionne: User | null = null;
  annonceModifie = {
    depart: '',
    destination: '',
    date: '',
    heure: '',
    nbPlaces: 0,
    prix: 0,
    etat: ''
  };

  editedUserInfo: any = {};
  Id=1;

  constructor(
    private trajetService: TrajetService,
    private vehiculeService: VehiculeService
  ) {}

  ngOnInit(): void {
    this.loadTrajets();
    this.loadVehicule();
  }

  // --- Actions utilisateurs ---
  logout() {
    alert('Déconnexion effectuée (à implémenter)');
  }

  modifierInfos() {
    // ouvrir un formulaire modal ou rediriger vers une page de modification
  }

  gererAnnonces() {
    // rediriger vers la gestion des annonces
  }

  saveUserInfoChanges() {
    this.nom = this.editedUserInfo.nom;
    this.prenom = this.editedUserInfo.prenom;
    this.email = this.editedUserInfo.email;
    this.phone = this.editedUserInfo.phone;
    console.log('Infos modifiées');
  }

  // --- Gestion dropdown UI ---
  toggleUserDropdown() {
    this.userDropdownOpen = !this.userDropdownOpen;
    if (this.userDropdownOpen) this.notifDropdownOpen = false;
  }

  closeUserDropdown() {
    setTimeout(() => this.userDropdownOpen = false, 150);
  }

  toggleNotifDropdown() {
    this.notifDropdownOpen = !this.notifDropdownOpen;
    if (this.notifDropdownOpen) this.userDropdownOpen = false;
  }

  closeNotifDropdown() {
    setTimeout(() => this.notifDropdownOpen = false, 150);
  }

  // --- Trajets ---
 loadTrajets() {
    this.trajetService.getTrajetsByUser(this.Id).subscribe({
      next: (data) => this.trajets = data,
      error: (err) => console.error('Erreur récupération trajets', err)
    });
  }

  modifierTrajet(trajet: Trajet): void {
    // Implémentation future
  }



  selectAnnonce(trajet: Trajet) {
    this.annonceSelectionne = { ...trajet };
    console.log("selectionné: ",this.annonceSelectionne)
  }

  onAnnonceModif(trajetModifie: Trajet) {
    const index = this.trajets.findIndex(t => t.id === trajetModifie.id);
    if (index !== -1) this.trajets[index] = trajetModifie;
    this.annonceSelectionne = null;
    this.fermerModal();
  }
  onInfoModif(userModifie: User) {
  this.nom = userModifie.firstname;
  this.prenom = userModifie.lastname;
  this.email = userModifie.email;
  this.phone = userModifie.phone;
}


  saveAnnonceChanges() {
    console.log('Sauvegarde de l\'annonce modifiée :', this.selectedAnnonce);
  }

  // --- Véhicules ---
  loadVehicule(): void {
    const id = 1; // à remplacer par l’ID utilisateur réel
    this.vehiculeService.getVehiculeByUserId(id).subscribe({
      next: (data: Vehicule[]) => {
        this.vehicules = data;
        this.noVehiculeMessage = this.vehicules.length === 0;
      },
      error: (err: any) => {
        console.error('Erreur chargement véhicules', err);
        this.noVehiculeMessage = true;
      }
    });
  }



  onDeleteVehicule(id: number): void {
    this.vehiculeService.deleteVehicule(id).subscribe({
      next: () => {
        this.vehicules = this.vehicules.filter(v => v.id !== id);
      },
      error: err => console.error('Erreur lors de la suppression', err)
    });
  }
   onDeleteAnnonce(id: number): void {
    console.log('delete annonce');
    this.trajetService.deleteTrajet(id).subscribe({
      next: () => {
        this.trajets = this.trajets.filter(v => v.id !== id);
      },
      error: err => console.error('Erreur lors de la suppression', err)
    });
      this.loadVehicule()
  }

  selectVehicule(vehicule: Vehicule) {
    this.vehiculeSelectionne = { ...vehicule };
    console.log("selectionné: ",this.vehiculeSelectionne)
  }

  saveVehiculeChanges() {
    console.log('Sauvegarde du véhicule modifié :', this.selectedVehicule);
  }

  onVehiculeAjoute(vehicule: Vehicule) {
    this.vehicules.push(vehicule);
     this.loadVehicule()
  }

  onVehiculeModif(vehicule: Vehicule) {
    const index = this.vehicules.findIndex(v => v.id === vehicule.id);
    if (index !== -1) this.vehicules[index] = vehicule;
 
  }

ouvrirModalModificationVehicule(vehicule: Vehicule) {
  this.vehiculeSelectionne = vehicule;
}



onTrajetModif(trajet: Trajet) {
  // logique ici
}

  openEditModal(trajet: Trajet) {
    this.annonceSelectionne = { ...trajet }; // pour éviter les modifications directes
  }

  fermerModal() {
    this.annonceSelectionne = null;
  }
}
