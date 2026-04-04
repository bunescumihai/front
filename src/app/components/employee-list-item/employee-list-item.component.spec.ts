import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { EmployeeListItemComponent } from './employee-list-item.component';

describe('EmployeeListItemComponent', () => {
  let component: EmployeeListItemComponent;
  let fixture: ComponentFixture<EmployeeListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeListItemComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: {} } }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeListItemComponent);
    component = fixture.componentInstance;
    component.employee = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      employmentDate: '2020-01-01',
      salary: 1000,
      department: { id: 1, name: 'IT' }
    } as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
