import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainruComponent } from './mainru.component';

describe('MainruComponent', () => {
  let component: MainruComponent;
  let fixture: ComponentFixture<MainruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainruComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
