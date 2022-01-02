import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiqueComponent } from './pique.component';

describe('PiqueComponent', () => {
  let component: PiqueComponent;
  let fixture: ComponentFixture<PiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should Savoir card return face', ()=> {
    component.savoir = true;
    component.onSavoir();
    expect(component.savoir).toBe(false);
    }); 
  it('should Savoir card return bottom', ()=> {
    component.savoir = false;
    component.onSavoir();
    expect(component.savoir).toBe(true);
    }); 
  it('should Savoir Menu Active', () => {
    component.savoirMenu = false; 
    jasmine.clock().install();  
    component.onSavoir();      
    jasmine.clock().tick(500); 
    expect(component.savoirMenu).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should Savoir Menu Active disable Active1', () => {
    component.savoir = true; 
    jasmine.clock().install();  
    component.onSavoir();      
    jasmine.clock().tick(1000); 
    expect(component.tabMenu[0]).toBe(false);  
    jasmine.clock().uninstall(); 
  });
  it('should Savoir Menu Active Active1', () => {
    component.savoir = false; 
    jasmine.clock().install();  
    component.onSavoir();      
    jasmine.clock().tick(1000); 
    expect(component.tabMenu[0]).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should Savoir1 card return face', ()=> {
    component.tabActive[0] = true;
    component.onSavoirActive1();
    expect(component.tabActive[0]).toBe(false);
    }); 
  it('should Savoir1 card return bottom', ()=> {
    component.tabActive[0] = false;
    component.onSavoirActive1();
    expect(component.tabActive[0]).toBe(true);
    }); 
  it('should SavoirActive1 rotateIn correctly', () => {
    component.tabActive[0] = true; 
    jasmine.clock().install();  
    component.onSavoirActive1();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[0]).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should SavoirActive1 rotateOut correctly', () => {
    component.tabActive[0] = false; 
    jasmine.clock().install();  
    component.onSavoirActive1();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[0]).toBe(false);  
    jasmine.clock().uninstall(); 
  });
  it('should Savoir2 card return face', ()=> {
    component.tabActive[1] = true;
    component.onSavoirActive2();
    expect(component.tabActive[1]).toBe(false);
    }); 
  it('should Savoir2 card return bottom', ()=> {
    component.tabActive[1] = false;
    component.onSavoirActive2();
    expect(component.tabActive[1]).toBe(true);
    }); 
  it('should Savoir Active2 rotateIn correctly', () => {
    component.tabActive[1] = true; 
    jasmine.clock().install();  
    component.onSavoirActive2();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[1]).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should Savoir Active2 rotateOut correctly', () => {
    component.tabActive[1] = false; 
    jasmine.clock().install();  
    component.onSavoirActive2();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[1]).toBe(false);  
    jasmine.clock().uninstall(); 
  });
  it('should toogle rotateFalse', () => {
    component.tabRotate[1] = true; 
    component.toogleSavoirActiveEtRotate();      
    expect(component.tabRotate[1]).toBe(false);  
  });
  it('should toogle rotateTrue', () => {
    component.tabRotate[1] = false; 
    component.toogleSavoirActiveEtRotate();      
    expect(component.tabRotate[1]).toBe(true);  
  });
  it('should toogle rotate if undefined', () => {
    component.tabRotate[1] = undefined; 
    component.toogleSavoirActiveEtRotate();      
    expect(component.tabRotate[1]).toBe(false);  
  });
  it('should Savoir Active3 rotateIn correctly', () => {
    component.tabActive[2] = true; 
    jasmine.clock().install();  
    component.onSavoirActive3();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[2]).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should Savoir Active3 rotateOut correctly', () => {
    component.tabActive[2] = false; 
    jasmine.clock().install();  
    component.onSavoirActive3();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[2]).toBe(false);  
    jasmine.clock().uninstall(); 
  });
  it('should Savoir Active4 rotateIn correctly', () => {
    component.tabActive[3] = true; 
    jasmine.clock().install();  
    component.onSavoirActive4();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[3]).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should Savoir Active4 rotateOut correctly', () => {
    component.tabActive[3] = false; 
    jasmine.clock().install();  
    component.onSavoirActive4();      
    jasmine.clock().tick(500); 
    expect(component.tabMenu[3]).toBe(false);  
    jasmine.clock().uninstall(); 
  });
});
