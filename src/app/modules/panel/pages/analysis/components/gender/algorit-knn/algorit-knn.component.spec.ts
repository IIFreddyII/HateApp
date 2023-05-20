import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoritKnnComponent } from './algorit-knn.component';

describe('AlgoritKnnComponent', () => {
  let component: AlgoritKnnComponent;
  let fixture: ComponentFixture<AlgoritKnnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgoritKnnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoritKnnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
