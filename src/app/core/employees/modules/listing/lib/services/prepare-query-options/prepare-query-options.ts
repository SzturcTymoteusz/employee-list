import { Injectable } from '@angular/core';
import { PrepareQueryOptionsService } from './prepare-query-options.service';
import { QueryOption } from '../../models/query-option';

@Injectable({
  providedIn: 'root',
  useClass: PrepareQueryOptionsService,
})
export abstract class PrepareQueryOptions {
  abstract prepare(): QueryOption;
}
