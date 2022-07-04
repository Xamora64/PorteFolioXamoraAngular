import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetResumeComponent } from './projet-resume.component';

describe('ProjetResumeComponent', () => {
  let component: ProjetResumeComponent;
  let fixture: ComponentFixture<ProjetResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
