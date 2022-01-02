import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrefleComponent } from './trefle.component';

describe('TrefleComponent', () => {
  let component: TrefleComponent;
  let fixture: ComponentFixture<TrefleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrefleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrefleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should SavoirFaire card return face', ()=> {
    component.savoirFaire = true;
    component.onSavoirFaire();
    expect(component.savoirFaire).toBe(false);
    }); 
  it('should SavoirFaire card return bottom', ()=> {
    component.savoirFaire = false;
    component.onSavoirFaire();
    expect(component.savoirFaire).toBe(true);
    }); 
  it('should SavoirFaire Menu Active', () => {
    component.savoirFaireMenu = false; 
    jasmine.clock().install();  
    component.onSavoirFaire();      
    jasmine.clock().tick(500); 
    expect(component.savoirFaireMenu).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirFaire Menu Active disable Active1', () => {
    component.savoirFaire = true; 
    jasmine.clock().install();  
    component.onSavoirFaire();      
    jasmine.clock().tick(1000); 
    expect(component.tabMenu[0]).toBe(false);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirFaire Menu Active Active1', () => {
    component.savoirFaire = false; 
    jasmine.clock().install();  
    component.onSavoirFaire();      
    jasmine.clock().tick(1000); 
    expect(component.tabMenu[0]).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirFaire1 card return face', ()=> {
    component.tabActive[0] = true;
    component.onSavoirFaireActive1();
    expect(component.tabActive[0]).toBe(false);
    }); 
  it('should SavoirFaire1 card return bottom', ()=> {
    component.tabActive[0] = false;
    component.onSavoirFaireActive1();
    expect(component.tabActive[0]).toBe(true);
    }); 
  it('should SavoirFaireActive1 rotateIn correctly', () => {
    component.tabActive[0] = true; 
    jasmine.clock().install();  
    component.onSavoirFaireActive1();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[0]).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirFaireActive1 rotateOut correctly', () => {
    component.tabActive[0] = false; 
    jasmine.clock().install();  
    component.onSavoirFaireActive1();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[0]).toBe(false);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirFaire2 card return face', ()=> {
    component.tabActive[1] = true;
    component.onSavoirFaireActive2();
    expect(component.tabActive[1]).toBe(false);
    }); 
  it('should SavoirFaire2 card return bottom', ()=> {
    component.tabActive[1] = false;
    component.onSavoirFaireActive2();
    expect(component.tabActive[1]).toBe(true);
    }); 
  it('should SavoirFaire Active2 rotateIn correctly', () => {
    component.tabActive[1] = true; 
    jasmine.clock().install();  
    component.onSavoirFaireActive2();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[1]).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirFaire Active2 rotateOut correctly', () => {
    component.tabActive[1] = false; 
    jasmine.clock().install();  
    component.onSavoirFaireActive2();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[1]).toBe(false);  
    jasmine.clock().uninstall(); 
  });
  it('should toogle rotateFalse', () => {
    component.tabRotate[1] = true; 
    component.toogleSavoirFaireActiveEtRotate();      
    expect(component.tabRotate[1]).toBe(false);  
  });
  it('should toogle rotateTrue', () => {
    component.tabRotate[1] = false; 
    component.toogleSavoirFaireActiveEtRotate();      
    expect(component.tabRotate[1]).toBe(true);  
  });
  it('should toogle rotate if undefined', () => {
    component.tabRotate[1] = undefined; 
    component.toogleSavoirFaireActiveEtRotate();      
    expect(component.tabRotate[1]).toBe(false);  
  });
  it('should SavoirFaire Active3 rotateIn correctly', () => {
    component.tabActive[2] = true; 
    jasmine.clock().install();  
    component.onSavoirFaireActive3();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[2]).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirFaire Active3 rotateOut correctly', () => {
    component.tabActive[2] = false; 
    jasmine.clock().install();  
    component.onSavoirFaireActive3();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[2]).toBe(false);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirFaire Active4 rotateIn correctly', () => {
    component.tabActive[3] = true; 
    jasmine.clock().install();  
    component.onSavoirFaireActive4();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[3]).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirFaire Active4 rotateOut correctly', () => {
    component.tabActive[3] = false; 
    jasmine.clock().install();  
    component.onSavoirFaireActive4();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[3]).toBe(false);  
    jasmine.clock().uninstall(); 
  });
});
