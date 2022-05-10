import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/car';
import { Router } from '@angular/router';

import { Location } from '@angular/common';
import {

  FormControl,
  FormGroup,
  Validators,

} from '@angular/forms';


@Component({
  selector: 'app-car-add-form',
  templateUrl: './car-add-form.component.html',
  styleUrls: ['./car-add-form.component.css'],
})
export class CarAddFormComponent implements OnInit {
  addCarForm: FormGroup;
  fileName = '';
  file: any
  constructor(
    private carService: CarService,
    private location: Location,
    private router: Router
  ) {
    this.addCarForm = new FormGroup({
      model: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      console.log("I'm on file selected");

      this.fileName = this.file.name;

    }
  }

  addCar() {
    if (this.addCarForm.valid) {
      const car = new Car(
        this.addCarForm.value.model,
        this.addCarForm.value.price,
        this.addCarForm.value.description,
        (this.addCarForm.value.image = this.fileName)
      );
      const formData = new FormData();
      formData.append('image', this.file);
      console.log(formData)
      const upload = this.carService.uploadImage(formData);
      upload.subscribe();
      this.addCarForm.controls['model'].reset();
      this.addCarForm.controls['image'].reset();
      this.addCarForm.controls['price'].reset();
      this.addCarForm.controls['description'].reset();

      this.carService.addCar(car).subscribe(() => {
        this.router.navigate(['/auth/maintenance']);
      });
    }
  }

  back() {
    this.location.back();
  }
}
