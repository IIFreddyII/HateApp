import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoritRegretionComponent } from './algorit-regretion.component';

describe('AlgoritRegretionComponent', () => {
  let component: AlgoritRegretionComponent;
  let fixture: ComponentFixture<AlgoritRegretionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgoritRegretionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgoritRegretionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
