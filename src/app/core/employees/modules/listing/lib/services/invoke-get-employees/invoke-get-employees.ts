import { Injectable } from '@angular/core';
import { InvokeGetEmployeesService } from './invoke-get-employees.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  useClass: InvokeGetEmployeesService,
})
export abstract class InvokeGetEmployees {
  abstract invokeObservable: Observable<undefined>;

  abstract invoke(): void;
}
