import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedcompcommComponent } from './nestedcompcomm.component';

describe('NestedcompcommComponent', () => {
  let component: NestedcompcommComponent;
  let fixture: ComponentFixture<NestedcompcommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedcompcommComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedcompcommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
