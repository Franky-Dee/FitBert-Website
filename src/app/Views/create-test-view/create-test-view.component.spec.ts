import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTestViewComponent } from './create-test-view.component';

describe('CreateTestViewComponent', () => {
  let component: CreateTestViewComponent;
  let fixture: ComponentFixture<CreateTestViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTestViewComponent]
    });
    fixture = TestBed.createComponent(CreateTestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
