import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargementPage } from './chargement.page';

describe('ChargementPage', () => {
  let component: ChargementPage;
  let fixture: ComponentFixture<ChargementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
