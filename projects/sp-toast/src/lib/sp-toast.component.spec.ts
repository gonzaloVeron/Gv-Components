import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpToastComponent } from './sp-toast.component';

describe('SpToastComponent', () => {
  let component: SpToastComponent;
  let fixture: ComponentFixture<SpToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpToastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
