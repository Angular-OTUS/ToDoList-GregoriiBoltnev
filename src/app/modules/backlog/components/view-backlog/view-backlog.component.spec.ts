import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBacklogComponent } from './view-backlog.component';

describe('ViewBacklogComponent', () => {
  let component: ViewBacklogComponent;
  let fixture: ComponentFixture<ViewBacklogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBacklogComponent]
    });
    fixture = TestBed.createComponent(ViewBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
