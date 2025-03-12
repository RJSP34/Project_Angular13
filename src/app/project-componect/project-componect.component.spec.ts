import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponectComponent } from './project-componect.component';

describe('ProjectComponectComponent', () => {
  let component: ProjectComponectComponent;
  let fixture: ComponentFixture<ProjectComponectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectComponectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
