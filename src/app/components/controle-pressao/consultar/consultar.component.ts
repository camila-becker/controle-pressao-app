import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ControlePressaoService } from '../controle-pressao.service';
import { ControlePressaoModel } from '../model/controle-pressao.model';
import { NotificacaoService } from '../../../services/notificacao.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-consultar',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [
    ControlePressaoService,
    NotificacaoService
  ],
  templateUrl: './consultar.component.html',
  styleUrl: './consultar.component.scss'
})
export class ConsultarComponent implements OnInit{

  public displayedColumns: string[] = ['nome', 'medidaDiastolica', 'medidaSistolica', 'batimentosCardiacos', 'dataDoRegistro'];
  public dataSource: ControlePressaoModel[] = [];

  constructor(private service: ControlePressaoService, private notificacaoService: NotificacaoService) {}


  ngOnInit(): void {
    this.consultarControlePressao();
    console.log(this.dataSource)
  }

  public consultarControlePressao() {

    this.service.consultarControlePressao().subscribe({
      next: (res) => this.dataSource = res,
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
      }
    });

  }

}
