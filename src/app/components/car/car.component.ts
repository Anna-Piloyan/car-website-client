import { Component, Input, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';
import { Router } from '@angular/router';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() car: any;
  
  constructor(private carService: CarService, private router: Router) { }

  ngOnInit(): void {

  }

  detailsCar(id: string) {
    this.router.navigate(['/auth/details', id])
  }

}
