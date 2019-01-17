import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorseSoundComponent } from './morse-sound.component';

describe('MorseSoundComponent', () => {
  let component: MorseSoundComponent;
  let fixture: ComponentFixture<MorseSoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorseSoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorseSoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
