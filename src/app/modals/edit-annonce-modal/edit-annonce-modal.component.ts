import { Component, EventEmitter, Output, Input,SimpleChanges,OnChanges } from '@angular/core';
import { Trajet } from 'src/app/models/trajet.model';
import { TrajetService } from 'src/app/services/trajet.service';

@Component({
  selector: 'app-edit-annonce-modal',
  templateUrl: './edit-annonce-modal.component.html',
  styleUrls: ['./edit-annonce-modal.component.css']
})

export class EditAnnonceModalComponent implements OnChanges {
  @Input() trajet!: any;
  @Output() annonceModif = new EventEmitter<any>();
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['trajet'] && this.trajet) {
      this.annonceModifie = {
        depart: this.trajet.depart,
        destination: this.trajet.destination,
        date: this.trajet.date,
        heure: this.trajet.heure,
        nbPlaces: this.trajet.nbPlaces,
        prix: this.trajet.prix,
        etat: this.trajet.etat
      };
    }
  }

  modifierAnnonce(): void {
    if (!this.trajet?.id || !this.trajet?.user?.id) {
      console.error('ID du trajet ou ID de l\'utilisateur manquant');
      return;
    }

    const updatedTrajet = {
      ...this.annonceModifie,
      id: this.trajet.id,
      user: {
        id: this.trajet.user.id
      }
    };

    this.trajetService.updateTrajet(this.trajet.id, updatedTrajet).subscribe({
      next: () => {
        console.log('Annonce (trajet) modifiée avec succès');
        this.annonceModif.emit(updatedTrajet);
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
