import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {
  cars: Car[] = []


  searchStr: string = ''
  constructor( private carService: CarService,
    private router: Router) { }

    ngOnInit(): void {
      this.carService.getCars().subscribe((data: any) => {
       // console.log(data)
        this.cars = data
      })
    }
    goToAddCar() {
      this.router.navigate(['/auth/add'])
    }

    detailsCar(id: string) {
      this.router.navigate(['/auth/details', id])
    }

    deleteCar(id: string) {


      this.carService.deleteCar(id).subscribe(() => {

        this.cars = this.cars.filter(car => car._id != id)

      })
    }

    editCar(id: string) {
      this.router.navigate(['/auth/edit', id])
    }

}
