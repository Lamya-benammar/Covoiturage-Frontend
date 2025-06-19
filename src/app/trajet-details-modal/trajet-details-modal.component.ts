import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Commentaire } from '../models/commentaire.model';
import { CommentaireService } from '../services/commentaire.service';
import { TrajetService } from '../services/trajet.service';

@Component({
  selector: 'app-trajet-details-modal',
  templateUrl: './trajet-details-modal.component.html',
  styleUrls: ['./trajet-details-modal.component.css']
})
export class TrajetDetailsModalComponent implements OnChanges {

  @Input() trajet: any = null;           
  @Input() userName: string = '';       

  @Output() close = new EventEmitter<void>();

  nouveauCommentaire: string = '';

  commentaires: Commentaire[] = [];  

@Output() trajetReserve = new EventEmitter<number>(); 

  constructor(private trajetService: TrajetService,private CommentaireService: CommentaireService) {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['trajet'] && this.trajet) {
      this.chargerCommentaires();
    }
  }

  fermer() {
    this.close.emit();
    this.nouveauCommentaire = '';
  }

  chargerCommentaires() {
    if (!this.trajet?.id) return;

    this.CommentaireService.getCommentairesByTrajetId(this.trajet.id).subscribe({
      next: (comms: Commentaire[]) => {
        this.commentaires = comms;
      }
    });
  }

  ajouterCommentaire() {
   
  }

 reserverPlace() {
    if (this.trajet.nbPlaces <= 0) {
      alert('Plus de places disponibles');
      return;
    }

    this.trajetService.reserverPlace(this.trajet.id).subscribe({
      next: () => {
        this.trajet.nbPlaces--;
        alert(`Réservation réussie ! ${this.trajet.conducteur} a une place réservée avec vous.`);

        if (this.trajet.nbPlaces === 0) {
          this.trajetReserve.emit(this.trajet.id); 
          this.fermer(); 
        }
      },
      error: () => alert('Erreur lors de la réservation. Veuillez réessayer.'),
    });
  }
}
