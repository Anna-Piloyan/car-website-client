import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/car';


@Component({
  selector: 'app-hope',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars: Car[] = [];
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe((data) => {
      this.cars = data;

    });
  }

}
