import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBaComponent } from './child-ba.component';

describe('ChildBaComponent', () => {
  let component: ChildBaComponent;
  let fixture: ComponentFixture<ChildBaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildBaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildBaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
