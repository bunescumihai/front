import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityComponent } from './activity.component';

describe('ActivityComponent', () => {
  let component: ActivityComponent;
  let fixture: ComponentFixture<ActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityComponent);
    component = fixture.componentInstance;
    component.activity = {
      id: 1,
      employeeId: 1,
      entry: '2020-01-01T08:00:00Z',
      exit: '2020-01-01T16:00:00Z'
    } as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
