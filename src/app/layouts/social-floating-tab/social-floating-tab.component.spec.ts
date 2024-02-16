import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialFloatingTabComponent } from './social-floating-tab.component';

describe('SocialFloatingTabComponent', () => {
  let component: SocialFloatingTabComponent;
  let fixture: ComponentFixture<SocialFloatingTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialFloatingTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialFloatingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
