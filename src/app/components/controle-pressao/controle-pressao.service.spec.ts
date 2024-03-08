import { TestBed } from '@angular/core/testing';
import { ControlePressaoService } from './controle-pressao.service';

describe('ControlePressaoService', () => {
  let service: ControlePressaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlePressaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
