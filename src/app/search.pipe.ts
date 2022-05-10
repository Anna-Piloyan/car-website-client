import { Pipe, PipeTransform } from '@angular/core';
import { Car } from './models/car';
@Pipe({
  name: 'search',
})

export class SearchPipe implements PipeTransform {

  transform(array: any, value: any) {
    return array.filter((car: Car) =>
      car.model.toLowerCase().includes(value)
    );
  }

}
