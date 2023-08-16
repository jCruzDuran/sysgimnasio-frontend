import { Component, Input} from '@angular/core';
import { Plan } from 'src/models/plan';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  @Input() planes: Plan[] = [];
  private mostrarModal = false;

  toggleModal(){
    this.mostrarModal = !this.mostrarModal;
  }
}
