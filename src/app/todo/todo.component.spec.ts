// This shows a different way of testing a component, check about for a simpler one
import { Component } from '@angular/core';

import { TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';

describe('Todo Component', () => {
  const html = '<todo-list></todo-list>';

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [TodoComponent, TestComponent]});
    TestBed.overrideComponent(TestComponent, { set: { template: html }});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Home Works!');
  });

});

@Component({selector: 'my-test', template: ''})
class TestComponent { }
