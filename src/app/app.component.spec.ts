import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TrefleComponent } from './trefle/trefle.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        TrefleComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Andermann Boris CV'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Andermann Boris CV');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('CvMobileFirst app is running!');
  });
  it('should collapseMenu default be true', ()=> {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let test = app.collapseMenu;
    expect(test).toBe(true);
    });
  it('should invers collapseMenu', ()=> {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.onCollapse();
    expect(app.collapseMenu).toBe(false);
    });  
  it('should show Trefle in menu selection', ()=> {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.savoirFaireShow = false;
    app.onSavoirFaireShow();
    expect(app.savoirFaireShow).toBe(true);
    });
  it('should still show Trefle in menu selection', ()=> {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.savoirFaireShow = true;
    app.onSavoirFaireShow();
    expect(app.savoirFaireShow).toBe(true);
    });
  it('should show Coeur in menu selection', ()=> {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.savoirEtreShow = false;
    app.onSavoirEtreShow();
    expect(app.savoirEtreShow).toBe(true);
    });
  it('should still show Coeur in menu selection', ()=> {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.savoirEtreShow = true;
    app.onSavoirEtreShow();
    expect(app.savoirEtreShow).toBe(true);
    });
  it('should show Pique in menu selection', ()=> {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.savoirShow = false;
    app.onSavoirShow();
    expect(app.savoirShow).toBe(true);
    });
  it('should still show Pique in menu selection', ()=> {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.savoirShow = true;
    app.onSavoirShow();
    expect(app.savoirShow).toBe(true);
    });
  it('should show Carreau in menu selection', ()=> {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.toutSavoirShow = false;
    app.onToutSavoirShow();
    expect(app.toutSavoirShow).toBe(true);
    });
  it('should still show Carreau in menu selection', ()=> {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.toutSavoirShow = true;
    app.onToutSavoirShow();
    expect(app.toutSavoirShow).toBe(true);
    });
    it('should show Credit in menu selection', ()=> {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      app.creditsShow = false;
      app.onCredits();
      expect(app.creditsShow).toBe(true);
      });
    it('should still show Credit in menu selection', ()=> {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      app.creditsShow = true;
      app.onCredits();
      expect(app.creditsShow).toBe(false);
      });
});
