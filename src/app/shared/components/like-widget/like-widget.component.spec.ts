import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  beforeEach(() => {
    // Configurando um módulo para o teste
    // TestBed.configureTestingModule({
    //   declarations: [LikeWidgetComponent],
    //   providers: [UniqueIdService],
    //   imports: [FontAwesomeModule]
    // }).compileComponents();
    
    TestBed.configureTestingModule({
      imports: [LikeWidgetModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
  });

  it('Should create component', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy(); // Valores TRUTHY
  });

  it('Should auto generate ID when id input property is missing', () => {
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.id).toBeTruthy(); // Valores TRUTHY
  });

  it('Should NOT auto generate ID when id input property is present', () => {
    const component = fixture.componentInstance;
    const someId = 'someID';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId); // Valores TRUTHY
  });
});
