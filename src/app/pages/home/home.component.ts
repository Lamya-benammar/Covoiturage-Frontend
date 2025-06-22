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
sidebarOpen = false;
showToast = false;
trajetSelectionne: any = null;  


  constructor(private trajetService: TrajetService) {}

  ngOnInit(): void {
    this.loadAllTrajets();

  }

loadAllTrajets() {
  this.trajetService.getAllTrajets().subscribe(data => {
    this.trajets = data.filter(trajet => trajet.nbPlaces > 0);
  });
}


toggleSidebar() {
  this.sidebarOpen = !this.sidebarOpen;
}

closeSidebar() {
  this.sidebarOpen = false;
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
 
  }

  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {

    setTimeout(() => {
      this.dropdownOpen = false;
    }, 150);
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

   ouvrirModal(trajet: any) {
    
    this.trajetService.incrementerVu(trajet.id).subscribe({
      next: () => {
  
        trajet.vu = (trajet.vu ?? 0) + 1;
      },
      error: (err) => console.error('Erreur incrémentation nombre de vues', err)
    });
    
    this.trajetSelectionne = trajet;
  }

  fermerModal() {
    this.trajetSelectionne = null;
  }
onTrajetReserve(event: { id: number; success: boolean }) {
  if (event.success) {
    this.loadAllTrajets();
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }
}


}

