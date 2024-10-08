import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-modal-component',
  standalone: true,
  imports: [],
  templateUrl: './delete-modal-component.component.html',
  styleUrl: './delete-modal-component.component.css'
})
export class DeleteModalComponentComponent {
  constructor(public modal: NgbActiveModal){}
}
