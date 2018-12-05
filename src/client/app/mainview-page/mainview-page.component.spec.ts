import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainviewPageComponent } from './mainview-page.component';

describe('MainviewPageComponent', () => {
  let component: MainviewPageComponent;
  let fixture: ComponentFixture<MainviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
