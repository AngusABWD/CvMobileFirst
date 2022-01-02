import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsComponent } from './credits.component';

describe('CreditsComponent', () => {
  let component: CreditsComponent;
  let fixture: ComponentFixture<CreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should Credits card return face', ()=> {
    component.Credits = true;
    component.onCredits();
    expect(component.Credits).toBe(false);
    }); 
  it('should Credits card return bottom', ()=> {
    component.Credits = false;
    component.onCredits();
    expect(component.Credits).toBe(true);
    }); 
  it('should Credits Menu Active', () => {
    component.CreditsMenu = false; 
    jasmine.clock().install();  
    component.onCredits();      
    jasmine.clock().tick(500); 
    expect(component.CreditsMenu).toBe(true);  
    jasmine.clock().uninstall(); 
  });
  it('should Credits Menu not Active', () => {
    component.Credits = false; 
    jasmine.clock().install();  
    component.onCredits();      
    jasmine.clock().tick(500); 
    expect(component.CreditsMenu).toBe(false);  
    jasmine.clock().uninstall(); 
  });
  it('should rotateCredits will be undefined', () => {
    component.Credits = true; 
    component.rotateCredits = true;
    jasmine.clock().install();  
    component.onCredits();      
    jasmine.clock().tick(1000); 
    expect(component.rotateCredits).toBe(undefined);  
    jasmine.clock().uninstall(); 
  });
});
