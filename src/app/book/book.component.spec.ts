import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ BookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#test() should toggle #doTest', () => {
    expect(component.doTest).toBe(false, 'off at first');
    expect(component.ongoingTest).toBe(false, 'off at first');
    component.test();
    expect(component.doTest).toBe(true, 'on after first');
    expect(component.ongoingTest).toBe(true, 'on after first');
    component.test();
    expect(component.doTest).toBe(false, 'off after second');
    expect(component.ongoingTest).toBe(true, 'off after second');
  });

  

});
