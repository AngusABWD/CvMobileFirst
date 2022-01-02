import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoeurComponent } from './coeur.component';

describe('CoeurComponent', () => {
  let component: CoeurComponent;
  let fixture: ComponentFixture<CoeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should SavoirEtre card return face', ()=> {
    component.savoirEtre = true;
    component.onSavoirEtre();
    expect(component.savoirEtre).toBe(false);
    }); 
  it('should SavoirEtre card return bottom', ()=> {
    component.savoirEtre = false;
    component.onSavoirEtre();
    expect(component.savoirEtre).toBe(true);
    }); 
  it('should SavoirEtre Menu Active', () => {
    component.savoirEtreMenu = false; 
    jasmine.clock().install();  
    component.onSavoirEtre();      
    jasmine.clock().tick(500); 
    expect(component.savoirEtreMenu).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirEtre Menu Active disable Active1', () => {
    component.savoirEtre = true; 
    jasmine.clock().install();  
    component.onSavoirEtre();      
    jasmine.clock().tick(1000); 
    expect(component.tabMenu[0]).toBe(false);  
    jasmine.clock().uninstall();
  });
  it('should SavoirEtre Menu Active Active1', () => {
    component.savoirEtre = false; 
    jasmine.clock().install();  
    component.onSavoirEtre();      
    jasmine.clock().tick(1000); 
    expect(component.tabMenu[0]).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirEtre1 card return face', ()=> {
    component.tabActive[0] = true;
    component.onSavoirEtreActive1();
    expect(component.tabActive[0]).toBe(false);
    }); 
  it('should SavoirEtre1 card return bottom', ()=> {
    component.tabActive[0] = false;
    component.onSavoirEtreActive1();
    expect(component.tabActive[0]).toBe(true);
    }); 
  it('should SavoirEtreActive1 rotateIn correctly', () => {
    component.tabActive[0] = true; 
    jasmine.clock().install();  
    component.onSavoirEtreActive1();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[0]).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirEtreActive1 rotateOut correctly', () => {
    component.tabActive[0] = false; 
    jasmine.clock().install();  
    component.onSavoirEtreActive1();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[0]).toBe(false);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirEtre2 card return face', ()=> {
    component.tabActive[1] = true;
    component.onSavoirEtreActive2();
    expect(component.tabActive[1]).toBe(false);
    }); 
  it('should SavoirEtre2 card return bottom', ()=> {
    component.tabActive[1] = false;
    component.onSavoirEtreActive2();
    expect(component.tabActive[1]).toBe(true);
    }); 
  it('should SavoirEtre Active2 rotateIn correctly', () => {
    component.tabActive[1] = true; 
    jasmine.clock().install();  
    component.onSavoirEtreActive2();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[1]).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirEtre Active2 rotateOut correctly', () => {
    component.tabActive[1] = false; 
    jasmine.clock().install();  
    component.onSavoirEtreActive2();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[1]).toBe(false);  
    jasmine.clock().uninstall(); 
  });
  it('should toogle rotateFalse', () => {
    component.tabRotate[1] = true; 
    component.toogleSavoirEtreActiveEtRotate();      
    expect(component.tabRotate[1]).toBe(false);  
  });
  it('should toogle rotateTrue', () => {
    component.tabRotate[1] = false; 
    component.toogleSavoirEtreActiveEtRotate();      
    expect(component.tabRotate[1]).toBe(true);  
  });
  it('should toogle rotate if undefined', () => {
    component.tabRotate[1] = undefined; 
    component.toogleSavoirEtreActiveEtRotate();      
    expect(component.tabRotate[1]).toBe(false);  
  });
  it('should SavoirEtre Active3 rotateIn correctly', () => {
    component.tabActive[2] = true; 
    jasmine.clock().install();  
    component.onSavoirEtreActive3();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[2]).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirEtre Active3 rotateOut correctly', () => {
    component.tabActive[2] = false; 
    jasmine.clock().install();  
    component.onSavoirEtreActive3();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[2]).toBe(false);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirEtre Active4 rotateIn correctly', () => {
    component.tabActive[3] = true; 
    jasmine.clock().install();  
    component.onSavoirEtreActive4();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[3]).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirEtre Active4 rotateOut correctly', () => {
    component.tabActive[3] = false; 
    jasmine.clock().install();  
    component.onSavoirEtreActive4();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[3]).toBe(false);  
    jasmine.clock().uninstall(); 
  });
});
