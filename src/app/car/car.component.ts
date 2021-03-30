import { Component, OnInit, Input, IterableChangeRecord } from '@angular/core';
import { CarApiService } from '../services/car-api.service';
import { ICar } from "../interfaces/car";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarApiService]
})
export class CarComponent implements OnInit {
@Input() carData:ICar;

carImageWidth:number=300;
  constructor(private _carAPIService:CarApiService) { }

  ngOnInit() {
  }

  deleteCar(carId:string) {
    console.log(carId);
    this._carAPIService.delCarData(carId);
  }

}
