import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileAttentePage } from './file-attente.page';

describe('FileAttentePage', () => {
  let component: FileAttentePage;
  let fixture: ComponentFixture<FileAttentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileAttentePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileAttentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
