import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AggiungiMembriComponent } from './aggiungi-membri.component';

describe('AggiungiMembriComponent', () => {
  let component: AggiungiMembriComponent;
  let fixture: ComponentFixture<AggiungiMembriComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AggiungiMembriComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AggiungiMembriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
