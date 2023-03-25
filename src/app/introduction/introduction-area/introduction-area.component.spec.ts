import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionAreaComponent } from './introduction-area.component';

describe('IntroductionAreaComponent', () => {
  let component: IntroductionAreaComponent;
  let fixture: ComponentFixture<IntroductionAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroductionAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
