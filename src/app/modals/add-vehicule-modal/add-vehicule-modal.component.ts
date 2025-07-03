import { Component, EventEmitter, Output } from '@angular/core';
import { Vehicule } from 'src/app/models/vehicule.model';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-add-vehicule-modal',
  templateUrl: './add-vehicule-modal.component.html',
  styleUrls: ['./add-vehicule-modal.component.css']
})
export class AddVehiculeModalComponent {
  nouveauVehicule = { id: 0, marque: '', immatricule: '' };

  @Output() vehiculeAjoute = new EventEmitter<any>();

  constructor(
    private vehiculeService: VehiculeService
  ) {}
  
  ajouterVehicule(): void {
  const userId = 1;

  const vehiculeAvecId: Vehicule = {
    id: Math.floor(Math.random() * 100000),
    marque: this.nouveauVehicule.marque || '',
    immatricule: this.nouveauVehicule.immatricule || ''
  };

  this.vehiculeService.addVehicule(userId, vehiculeAvecId).subscribe({
    next: () => {
      this.vehiculeAjoute.emit(vehiculeAvecId); 
      this.nouveauVehicule = { id: 0, marque: '', immatricule: '' }; 
    },
    error: (err) => console.error('Erreur ajout véhicule:', err)
  });
}

}
