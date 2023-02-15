import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxRecipeDetailsComponent } from './ngrx-recipe-details.component';

describe('NgrxRecipeDetailsComponent', () => {
  let component: NgrxRecipeDetailsComponent;
  let fixture: ComponentFixture<NgrxRecipeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxRecipeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxRecipeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
