import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopertureYoloHomeComponent } from './coperture-yolo-home.component';

describe('CopertureYoloHomeComponent', () => {
  let component: CopertureYoloHomeComponent;
  let fixture: ComponentFixture<CopertureYoloHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CopertureYoloHomeComponent]
    });
    fixture = TestBed.createComponent(CopertureYoloHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
