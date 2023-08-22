import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PclientesComponent } from './pclientes.component';

describe('PclientesComponent', () => {
  let component: PclientesComponent;
  let fixture: ComponentFixture<PclientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PclientesComponent]
    });
    fixture = TestBed.createComponent(PclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
