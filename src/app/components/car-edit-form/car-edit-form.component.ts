import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { Router } from '@angular/router';
//import { FileUploadComponent } from '../file-upload/file-upload.component';
import { Location } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-car-edit-form',
  templateUrl: './car-edit-form.component.html',
  styleUrls: ['./car-edit-form.component.css'],
})
export class CarEditFormComponent implements OnInit {
  car = new Car('', 0, '', '');

  addCarForm: FormGroup;
  fileName = '';
  file: any;
  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
    this.addCarForm = new FormGroup({
      model: new FormControl(''),
      price: new FormControl(''),
      description: new FormControl(''),
      image: new FormControl(''),
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.carService.getCar(id).subscribe((data: any) => {
      this.car = data;
      console.log(this.car);
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      console.log("I'm on file selected");
      this.fileName = file.name;
    }
  }

  updateCar() {

    console.log('Car edit');
    (this.car.model = this.addCarForm.value.model),
      (this.car.price = this.addCarForm.value.price),
      (this.car.description = this.addCarForm.value.description),
      (this.car.image = this.fileName);

    const formData = new FormData();
    formData.append('image', this.file);
    console.log(formData);
    const upload = this.carService.uploadImage(formData);
    upload.subscribe();

    this.carService.updateCar(this.car).subscribe(() => {
      this.router.navigate(['/auth/maintenance']);
    });

    this.addCarForm.controls['model'].reset();
    this.addCarForm.controls['image'].reset();
    this.addCarForm.controls['price'].reset();
    this.addCarForm.controls['description'].reset();

  }

  back() {
    this.location.back();
  }
}
