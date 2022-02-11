import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-simplemodal',
  templateUrl: './simplemodal.page.html',
  styleUrls: ['./simplemodal.page.scss'],
})
export class SimplemodalPage {
  
  /* Decorator utilizado para informar que 'produto' é um atributo de entrada */
  @Input() produto: any;

  constructor(private modalController: ModalController) {}

  dismiss() {
    /* método utilizado para fechar o modal e retornar uma resposta */
    this.modalController.dismiss('teste 1');
  }
}
