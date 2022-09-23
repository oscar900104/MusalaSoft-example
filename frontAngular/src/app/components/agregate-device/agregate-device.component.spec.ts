import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregateDeviceComponent } from './agregate-device.component';

describe('AgregateDeviceComponent', () => {
  let component: AgregateDeviceComponent;
  let fixture: ComponentFixture<AgregateDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregateDeviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregateDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
