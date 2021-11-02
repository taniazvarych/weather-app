import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'temperatureConverter'})

   export class TemperatureConverterPipe implements PipeTransform {
    transform(value: number) {
        const tempareature = value - 273.15;
        return Math.round(tempareature);            
   }
}
   