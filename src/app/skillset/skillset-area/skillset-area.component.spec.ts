import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsetAreaComponent } from './skillset-area.component';

describe('SkillsetAreaComponent', () => {
  let component: SkillsetAreaComponent;
  let fixture: ComponentFixture<SkillsetAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsetAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsetAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
