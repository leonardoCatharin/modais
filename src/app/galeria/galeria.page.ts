import { ActionSheetController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage {
  public pathImgs = '../../assets/img/';

  public fotos = [
    { imagem: 'imagem1.jpg', favorito: false },
    { imagem: 'imagem2.jpg', favorito: false },
    { imagem: 'imagem2.jpg', favorito: false },
    { imagem: 'imagem1.jpg', favorito: false },
    { imagem: 'imagem1.jpg', favorito: false },
    { imagem: 'imagem2.jpg', favorito: false },
    { imagem: 'imagem2.jpg', favorito: false },
    { imagem: 'imagem1.jpg', favorito: false },
    { imagem: 'imagem1.jpg', favorito: false },
    { imagem: 'imagem2.jpg', favorito: false }
  ]

  constructor(private actionSheetController: ActionSheetController) { }

  async showAction(index: number){
    const actionSheet = await this.actionSheetController.create({
      header: 'Opções',
      buttons: [{
        text: 'Remover',
        icon: 'trash',
        handler: () => {
          this.removeFoto(index);
        }
      }, {
        text: 'Favorito',
        icon: 'star',
        handler: () => {
          this.favoritarFoto(index);
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        handler: () => {}
      }]
    });

    await actionSheet.present();
  }

  /* método utilizado para remover um item específico da lista */
  public removeFoto(index) {
    this.fotos.splice(index, 1);
  }

  /* método utilizado para favoritar a foto */
  public favoritarFoto(index) {
    if(this.fotos[index].favorito){
      this.fotos[index].favorito = false;

    } else {
      this.fotos[index].favorito = true;

    }
  }

}
