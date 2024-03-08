import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificaoModel } from '../components/controle-pressao/model/notificao.model';

@Injectable({
  providedIn: 'root',
})
export class NotificacaoService {

  constructor(private _snackBar: MatSnackBar) { }

  public notificacao({ mensagem, acao, posicaoHorizontal, posicaoVertical, duracao, classeEstilo }: NotificaoModel) {
    this._snackBar.open(mensagem, acao, {
      horizontalPosition: posicaoHorizontal,
      verticalPosition: posicaoVertical,
      duration: duracao,
      panelClass: [classeEstilo]
    });
  }
}
