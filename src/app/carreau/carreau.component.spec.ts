import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreauComponent } from './carreau.component';

describe('CarreauComponent', () => {
  let component: CarreauComponent;
  let fixture: ComponentFixture<CarreauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarreauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarreauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should SavoirTout card return face', ()=> {
    component.savoirTout = true;
    component.onSavoirTout();
    expect(component.savoirTout).toBe(false);
    }); 
  it('should SavoirTout card return bottom', ()=> {
    component.savoirTout = false;
    component.onSavoirTout();
    expect(component.savoirTout).toBe(true);
    }); 
  it('should SavoirTout Menu Active', () => {
    component.savoirToutMenu = false; 
    jasmine.clock().install();  
    component.onSavoirTout();      
    jasmine.clock().tick(500); 
    expect(component.savoirToutMenu).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirTout Menu Active disable Active1', () => {
    component.savoirTout = true; 
    jasmine.clock().install();  
    component.onSavoirTout();      
    jasmine.clock().tick(1000); 
    expect(component.tabMenu[0]).toBe(false);  
    jasmine.clock().uninstall();
  });
  it('should SavoirTout Menu Active Active1', () => {
    component.savoirTout = false; 
    jasmine.clock().install();  
    component.onSavoirTout();      
    jasmine.clock().tick(1000); 
    expect(component.tabMenu[0]).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirTout1 card return face', ()=> {
    component.tabActive[0] = true;
    component.onSavoirToutActive1();
    expect(component.tabActive[0]).toBe(false);
    }); 
  it('should SavoirTout1 card return bottom', ()=> {
    component.tabActive[0] = false;
    component.onSavoirToutActive1();
    expect(component.tabActive[0]).toBe(true);
    }); 
  it('should SavoirToutActive1 rotateIn correctly', () => {
    component.tabActive[0] = true; 
    jasmine.clock().install();  
    component.onSavoirToutActive1();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[0]).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirToutActive1 rotateOut correctly', () => {
    component.tabActive[0] = false; 
    jasmine.clock().install();  
    component.onSavoirToutActive1();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[0]).toBe(false);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirTout2 card return face', ()=> {
    component.tabActive[1] = true;
    component.onSavoirToutActive2();
    expect(component.tabActive[1]).toBe(false);
    }); 
  it('should SavoirTout2 card return bottom', ()=> {
    component.tabActive[1] = false;
    component.onSavoirToutActive2();
    expect(component.tabActive[1]).toBe(true);
    }); 
  it('should SavoirTout Active2 rotateIn correctly', () => {
    component.tabActive[1] = true; 
    jasmine.clock().install();  
    component.onSavoirToutActive2();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[1]).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirTout Active2 rotateOut correctly', () => {
    component.tabActive[1] = false; 
    jasmine.clock().install();  
    component.onSavoirToutActive2();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[1]).toBe(false);  
    jasmine.clock().uninstall(); 
  });
  it('should toogle rotateFalse', () => {
    component.tabRotate[1] = true; 
    component.toogleSavoirToutActiveEtRotate();      
    expect(component.tabRotate[1]).toBe(false);  
  });
  it('should toogle rotateTrue', () => {
    component.tabRotate[1] = false; 
    component.toogleSavoirToutActiveEtRotate();      
    expect(component.tabRotate[1]).toBe(true);  
  });
  it('should toogle rotate if undefined', () => {
    component.tabRotate[1] = undefined; 
    component.toogleSavoirToutActiveEtRotate();      
    expect(component.tabRotate[1]).toBe(false);  
  });
  it('should SavoirTout Active3 rotateIn correctly', () => {
    component.tabActive[2] = true; 
    jasmine.clock().install();  
    component.onSavoirToutActive3();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[2]).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirTout Active3 rotateOut correctly', () => {
    component.tabActive[2] = false; 
    jasmine.clock().install();  
    component.onSavoirToutActive3();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[2]).toBe(false);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirTout Active4 rotateIn correctly', () => {
    component.tabActive[3] = true; 
    jasmine.clock().install();  
    component.onSavoirToutActive4();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[3]).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirTout Active4 rotateOut correctly', () => {
    component.tabActive[3] = false; 
    jasmine.clock().install();  
    component.onSavoirToutActive4();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[3]).toBe(false);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirTout Active5 rotateIn correctly', () => {
    component.tabActive[4] = true; 
    jasmine.clock().install();  
    component.onSavoirToutActive5();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[4]).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirTout Active5 rotateOut correctly', () => {
    component.tabActive[4] = false; 
    jasmine.clock().install();  
    component.onSavoirToutActive5();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[4]).toBe(false);  
    jasmine.clock().uninstall(); 
  });
});
