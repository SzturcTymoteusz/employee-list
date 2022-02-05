import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable, of, timer} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

export function emailUniqueness(checkFunction: (value: string, id?: string) => boolean): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return timer(500).pipe(
      switchMap(() => {
        const id = control.parent !== null ? control.parent.get('id') : null;
        if (id) {
          return of(checkFunction(control.value, id.value));
        } else {
          return of(checkFunction(control.value));
        }
      }),
      map((elementIsUnique: boolean) => (elementIsUnique ? null : ({emailUniqueness: true} as ValidationErrors)))
    );
  };
}
