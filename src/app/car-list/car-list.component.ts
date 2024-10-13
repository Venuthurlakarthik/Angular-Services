import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit{
    cars: { id: number, model: string, year: number }[] = [];
  
    constructor(private carService: CarService) {}
  
    ngOnInit(): void {
      this.cars = this.carService.getCars();
    }
  
    addCar() {
      var car1 = { id: this.cars.length + 1, model: 'Ford Mustang', year: 2023 };
      var car2= {id: this.cars.length+2,model: 'shift', year:2024}
      this.carService.addCar(car1);
      this.carService.addCar(car2);
      this.cars = this.carService.getCars();
    }
  
    deleteCar(id: number) {
      this.carService.deleteCar(id);
      this.cars = this.carService.getCars();
    }
  }


