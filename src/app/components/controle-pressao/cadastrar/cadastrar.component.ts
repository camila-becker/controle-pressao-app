import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ControlePressaoModel } from '../model/controle-pressao.model';
import { ControlePressaoService } from '../controle-pressao.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificaoModel } from '../model/notificao.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NotificacaoService } from '../../../services/notificacao.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  providers: [
    ControlePressaoService,
    NotificacaoService
  ]
})
export class CadastrarComponent {

  public formulario: FormGroup;
  public carregando = false;

  constructor(
      private formBuilder: FormBuilder,
      private service: ControlePressaoService,
      private notificacaoService: NotificacaoService
  ) {
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required]],
      diastolica: ['', [Validators.required]],
      sistolica: ['', [Validators.required]],
      batimentos: ['', [Validators.required]]
    });
  }

  public validarCampoNumerico(event: KeyboardEvent):void {
    const key = event.key;

    if (!/^[0-9]$/.test(key)) {
      event.preventDefault();
    }

  }

  public salvar():void {
    this.carregando = true;
    this.service
      .cadastrarControlePressao(this.montarRequest())
      .subscribe({
        next: () => {
          this.notificacaoService.notificacao({
            mensagem: 'Cadastrado com sucesso!',
            acao: 'Ok',
            posicaoHorizontal: 'end',
            posicaoVertical: 'top',
            duracao: 3000,
            classeEstilo: 'snackbar-success'
          });
        },
        error: (err) => {
          console.error(err);
          this.notificacaoService.notificacao({
            mensagem: 'Erro ao cadastrar!',
            acao: 'Ok',
            posicaoHorizontal: 'end',
            posicaoVertical: 'top',
            duracao: 3000,
            classeEstilo: 'snackbar-error'
          });
        },
        complete: () => this.limpar()
      }).add(() => this.carregando = false);
  }

  public limpar():void {
    this.formulario.reset();
  }

  private montarRequest(): ControlePressaoModel {
    const nome = this.formulario.controls['nome'].value;
    const medidaDiastolica = this.formulario.controls['diastolica'].value;
    const medidaSistolica = this.formulario.controls['sistolica'].value;
    const batimentosCardiacos = this.formulario.controls['batimentos'].value;

    return {
      nome,
      medidaDiastolica,
      medidaSistolica,
      batimentosCardiacos
    };
  }
}
