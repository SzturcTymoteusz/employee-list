import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'transformToDate'
})
export class TransformToDate implements PipeTransform {
  transform(timeInSeconds: number): string {
    const date = new Date(timeInSeconds * 1000);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
  }
}
