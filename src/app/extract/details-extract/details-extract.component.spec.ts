import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsExtractComponent } from './details-extract.component';

describe('DetailsExtractComponent', () => {
  let component: DetailsExtractComponent;
  let fixture: ComponentFixture<DetailsExtractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsExtractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsExtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
