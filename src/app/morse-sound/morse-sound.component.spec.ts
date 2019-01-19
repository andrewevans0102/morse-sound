import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MorseSoundComponent } from './morse-sound.component';
import { FormsModule } from '@angular/forms';

describe('MorseSoundComponent', () => {
  let component: MorseSoundComponent;
  let fixture: ComponentFixture<MorseSoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorseSoundComponent ],
      imports: [ FormsModule ]
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
