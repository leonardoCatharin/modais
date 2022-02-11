import { SimplemodalPage } from './../simplemodal/simplemodal.page';
import { Component } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public produtoTeste = {
    titulo : 'Panela de pressão',
    valor  : 'R$ 150,00'
  }

  constructor(private modalController: ModalController, 
              private actionSheetController: ActionSheetController) {}

  /* método responsável por chamar o modal simples */
  async showSimpleModal() {
    const modal = await this.modalController.create({
      component: SimplemodalPage, /* ATENÇÃO: IMPORTE A PÁGINA E NÃO O MÓDULO */
      componentProps: {
        produto: this.produtoTeste /* dados passados por parâmetro */
      }
    });

    /* função utilizada dessa maneira para tornar as instruções síncronas */
    modal.onWillDismiss().then(data => { /* dados retornados do modal */
      console.log(data);
    });
    
    await modal.present();

  }

  async showActions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opções',
      buttons: [{
        text: 'Remover',
        role: 'remove',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('opção selecionada: remover');
        }
      }, {
        text: 'Compartilhar',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('opção selecionada: compartilhar');
        }
      }, {
        text: 'Favorito',
        icon: 'heart',
        handler: () => {
          console.log('opção selecionada: favorito');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('opção selecionada: cancelada');
        }
      }]
    });

    await actionSheet.present();

    /* função utilizada dessa maneira para tornar as instruções síncronas */
    const { role, data } = await actionSheet.onDidDismiss();

    alert(role);
    alert(data);
  }

}
