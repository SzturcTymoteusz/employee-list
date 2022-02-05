import { Injectable } from '@angular/core';
import { ResetServicesService } from './reset-services.service';

@Injectable({
  providedIn: 'root',
  useClass: ResetServicesService,
})
export abstract class ResetServices {
  abstract reset(): void;
}
