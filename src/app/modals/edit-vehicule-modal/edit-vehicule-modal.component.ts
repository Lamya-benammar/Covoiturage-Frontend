import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Vehicule } from 'src/app/models/vehicule.model';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-edit-vehicule-modal',
  templateUrl: './edit-vehicule-modal.component.html',
  styleUrls: ['./edit-vehicule-modal.component.css']
})
export class EditVehiculeModalComponent implements OnChanges {

  @Input() vehicule: Vehicule | null = null;

    @Output() fermeture = new EventEmitter<void>();
  @Output() vehiculeModif = new EventEmitter<Vehicule>();
    userId = 1;

  vehiculeModifie = { id: 0, marque: '', immatricule: '' };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['vehicule'] && this.vehicule) {
  
      this.vehiculeModifie = { ...this.vehicule };
    }
  }

   constructor(private vehiculeService: VehiculeService) {}
 
 
 
   modifierVehicule(): void {
     console.log('click button');
     this.vehiculeService.updateVehicule(this.userId, this.vehiculeModifie).subscribe({
       next: () => {
         console.log('Véhicule modifié avec succès');
         this.vehiculeModif.emit(this.vehiculeModifie);
         this.fermerModal(); 
       },
       error: err => {
         console.error('Erreur lors de la modification du véhicule', err);
       }
     });
   }
 
    fermerModal(): void {
    this.fermeture.emit();
  }
 
}
