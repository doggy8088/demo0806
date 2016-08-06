/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ArticleComponent } from './article.component';

describe('Component: Article', () => {
  it('should create an instance', () => {
    let component = new ArticleComponent();
    expect(component).toBeTruthy();
  });
});
