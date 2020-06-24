import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerandexpansionComponent } from './dividerandexpansion.component';

describe('DividerandexpansionComponent', () => {
  let component: DividerandexpansionComponent;
  let fixture: ComponentFixture<DividerandexpansionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividerandexpansionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerandexpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
