import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBComponent } from './parent-b.component';

describe('ParentBComponent', () => {
  let component: ParentBComponent;
  let fixture: ComponentFixture<ParentBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
