import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  cars: Car[] = [];
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe((data) => {
      let c = data.filter((car: Car) =>
      car.price > 50000);
      this.cars = c;

    });
  }

}
