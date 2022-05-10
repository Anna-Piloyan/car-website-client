import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { Car } from '../models/car';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  url = 'http://localhost:8000/api';

  constructor(private router: Router, private http: HttpClient) {}
  uploadImage(formData: FormData){
    // console.log("UPLOAD")
    // console.log(formData.get("image"))
    return this.http.post(`http://localhost:8000/upload`, formData, {
      observe: 'events',

    });
  }
  
  getCars(): Observable<Car[]> {
    return this.http.get(`${this.url}/cars`) as Observable<Car[]>;
  }

  getCar(id: string): Observable<Car> {
    return this.http.get(`${this.url}/cars/${id}`) as Observable<Car>;
  }

  addCar(newCar: Car): Observable<any> {
    return this.http.post(`${this.url}/cars`, newCar);
  }

  deleteCar(id: string): Observable<any> {
    return this.http.delete(`${this.url}/cars/${id}`).pipe();
  }

  updateCar(newCar: Car): Observable<Car> {
    return this.http.put(`${this.url}/cars`, newCar) as Observable<Car>;
  }
}
