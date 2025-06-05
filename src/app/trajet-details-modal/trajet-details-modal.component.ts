import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Commentaire } from '../models/commentaire.model'; // adapte le chemin selon ta structure
import { CommentaireService } from '../services/commentaire.service'; // idem

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

  commentaires: Commentaire[] = [];  // Liste locale des commentaires chargés

  constructor(private CommentaireService: CommentaireService) {}

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
}
