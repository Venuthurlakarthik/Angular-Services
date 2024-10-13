import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars = [
    { id: 1, model: 'Toyota Camry', year: 2020 },
    { id: 2, model: 'Honda Accord', year: 2021 },
    { id: 3, model: 'Tesla Model 3', year: 2022 },
    {id:4,model:'Tata',year:2023}
  ];
  constructor() { }
  getCars() {
    return this.cars;
  }

  getCarById(id: number) {
    return this.cars.find(car => car.id === id);
  }

  addCar(car: { id: number, model: string, year: number }) {
    this.cars.push(car);
  }

  deleteCar(id: number) {
    this.cars = this.cars.filter(car => car.id !== id);
  }
}

