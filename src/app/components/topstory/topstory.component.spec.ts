import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopstoryComponent } from './topstory.component';

describe('TopstoryComponent', () => {
  let component: TopstoryComponent;
  let fixture: ComponentFixture<TopstoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopstoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
