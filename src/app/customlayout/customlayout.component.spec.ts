import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomlayoutComponent } from './customlayout.component';

describe('CustomlayoutComponent', () => {
  let component: CustomlayoutComponent;
  let fixture: ComponentFixture<CustomlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
