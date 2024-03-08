export interface NotificaoModel {
  mensagem: string;
  acao: string;
  posicaoHorizontal: 'start' | 'end' | 'center' | 'left' | 'right';
  posicaoVertical: 'bottom' | 'top';
  duracao: number;
  classeEstilo: string;
}
