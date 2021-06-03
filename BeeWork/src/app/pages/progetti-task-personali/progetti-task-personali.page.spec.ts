import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgettiTaskPersonaliPage } from './progetti-task-personali.page';

describe('ProgettiTaskPersonaliPage', () => {
  let component: ProgettiTaskPersonaliPage;
  let fixture: ComponentFixture<ProgettiTaskPersonaliPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgettiTaskPersonaliPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgettiTaskPersonaliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
