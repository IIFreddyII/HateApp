import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoritBayesComponent } from './algorit-bayes.component';

describe('AlgoritBayesComponent', () => {
  let component: AlgoritBayesComponent;
  let fixture: ComponentFixture<AlgoritBayesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgoritBayesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoritBayesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
