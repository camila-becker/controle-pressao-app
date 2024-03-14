import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ControlePressaoModel } from './model/controle-pressao.model';

@Injectable({
  providedIn: 'root'
})
export class ControlePressaoService {

  private apiUrl = 'https://controle-pressao-api.onrender.com/pressao'

  constructor(private http: HttpClient) { }

  public cadastrarControlePressao(request: ControlePressaoModel): Observable<void> {
    return this.http.post<void>(this.apiUrl, request);
  }

  public consultarControlePressao(): Observable<ControlePressaoModel[]> {
    return this.http.get<ControlePressaoModel[]>(this.apiUrl);
  }
}
