import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-car-details-form',
  templateUrl: './car-details-form.component.html',
  styleUrls: ['./car-details-form.component.css']
})
export class CarDetailsFormComponent implements OnInit {
  car = new Car('', 0, '', '');
  constructor( private carService: CarService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.carService.getCar(id).subscribe((data: any) => {
      this.car = data;
      console.log(this.car);
    });
  }

  back() {
    this.location.back();
  }

}
