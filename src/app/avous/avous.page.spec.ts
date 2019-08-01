import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvousPage } from './avous.page';

describe('AvousPage', () => {
  let component: AvousPage;
  let fixture: ComponentFixture<AvousPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvousPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
