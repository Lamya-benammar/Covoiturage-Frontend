import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/userService';
@Component({
  selector: 'app-edit-info-modal',
  templateUrl: './edit-info-modal.component.html',
  styleUrls: ['./edit-info-modal.component.css']
})
export class EditInfoModalComponent {
  @Input() user: User | null = null;
  @Output() userModif = new EventEmitter<User>();

  editedUser: User = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    phone: ''
  };

  ngOnChanges() {
    if (this.user) {
      this.editedUser = { ...this.user };
    }
  }

  saveChanges() {
    this.userModif.emit(this.editedUser);
  }

 isModalOpen = false; // Pour afficher ou masquer le modal

openModal(user: any) {
  this.editedUser = { ...user }; // Clonage pour ne pas modifier directement l'objet original
  this.isModalOpen = true;
}

closeModal() {
  this.isModalOpen = false;
}
}
