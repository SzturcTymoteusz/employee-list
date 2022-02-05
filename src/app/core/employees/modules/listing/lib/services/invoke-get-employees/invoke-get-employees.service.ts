import { Injectable } from '@angular/core';
import { InvokeGetEmployees } from './invoke-get-employees';
import { Subject } from 'rxjs';

@Injectable()
export class InvokeGetEmployeesService implements InvokeGetEmployees {
  private invokeSubject: Subject<undefined> = new Subject<undefined>();
  invokeObservable = this.invokeSubject.asObservable();

  invoke() {
    this.invokeSubject.next(undefined);
  }
}
