import { Component, EventEmitter, Output, Input,SimpleChanges } from '@angular/core';
import { Trajet } from 'src/app/models/trajet.model';
import { TrajetService } from 'src/app/services/trajet.service';

@Component({
  selector: 'app-edit-annonce-modal',
  templateUrl: './edit-annonce-modal.component.html',
  styleUrls: ['./edit-annonce-modal.component.css']
})
export class EditAnnonceModalComponent {
@Input() trajet: Trajet | null = null;
  @Output() annonceModif = new EventEmitter<Trajet>();
  @Output() fermeture = new EventEmitter<void>();
 annonceModifie = {
    depart: '',
    destination: '',
    date: '',
    heure: '',
    nbPlaces: 0,
    prix: 0,
    etat: ''
  };


    constructor(private trajetService: TrajetService) {}

  modifierAnnonce(): void {
    console.log('click');
    if (!this.trajet?.id) {
      console.error('ID du trajet manquant');
      return;
    }

    this.trajetService.updateTrajet(this.trajet.id, this.annonceModifie).subscribe({
      next: () => {
        console.log('Annonce (trajet) modifiée avec succès');
        this.annonceModif.emit(this.annonceModifie);
        this.fermerModal();
      },
      error: err => {
        console.error('Erreur lors de la modification de l’annonce (trajet)', err);
      }
    });
  }

  fermerModal(): void {
    this.fermeture.emit();
  }
  
}
