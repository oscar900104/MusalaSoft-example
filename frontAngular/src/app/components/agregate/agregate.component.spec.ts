import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregateComponent } from './agregate.component';

describe('AgregateComponent', () => {
  let component: AgregateComponent;
  let fixture: ComponentFixture<AgregateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
