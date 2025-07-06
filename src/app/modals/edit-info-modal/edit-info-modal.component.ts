import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/userService';

@Component({
  selector: 'app-edit-info-modal',
  templateUrl: './edit-info-modal.component.html',
  styleUrls: ['./edit-info-modal.component.css']
})
export class EditInfoModalComponent implements OnChanges {

  @Input() user: User | null = null;
  @Output() infoModifie = new EventEmitter<User>();
  @Output() fermeture = new EventEmitter<void>();

  userInfo: User = {
    id: 0,
    name: '',
    lastName: '',
    email: '',
    phone: '',
  };

  constructor(private userService: UserService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user'] && this.user) {
      this.userInfo = { ...this.user };
    }
  }

  modifierInfo(): void {
    this.userService.updateUser(this.userInfo.id, this.userInfo).subscribe({
      next: (updatedUser) => {
        console.log('Utilisateur modifié avec succès');
        this.infoModifie.emit(updatedUser);
        this.fermerModal();
      },
      error: err => {
        console.error('Erreur lors de la modification des infos utilisateur', err);
      }
    });
  }

  fermerModal(): void {
    this.fermeture.emit();
  }
}
