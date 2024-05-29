import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipBarComponent } from './chip-bar.component';

describe('ChipBarComponent', () => {
  let component: ChipBarComponent;
  let fixture: ComponentFixture<ChipBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChipBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChipBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
