/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { SearchService } from './search.service';

describe('Service: Search', () => {
  beforeEach(() => {
    addProviders([SearchService]);
  });

  it('should ...',
    inject([SearchService],
      (service: SearchService) => {
        expect(service).toBeTruthy();
      }));
});
