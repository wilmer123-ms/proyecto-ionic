import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallesLugaresPage } from './detalles-lugares.page';

describe('DetallesLugaresPage', () => {
  let component: DetallesLugaresPage;
  let fixture: ComponentFixture<DetallesLugaresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesLugaresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallesLugaresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
