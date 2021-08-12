import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  listEmployee: Employee[] = [{
    name: 'John Lennon', 
    email: 'john.lennon@email.com',
    phone: '11223344',
    sex: 'male',
    initDate: new Date(),
    state: 'married'
  },
  {
    name: 'Paul McCartney', 
    email: 'paul.mccartney@email.com',
    phone: '11223345',
    sex: 'male',
    initDate: new Date(),
    state: 'married'
  },
  {
    name: 'George Harrison', 
    email: 'george.harrison@email.com',
    phone: '11223346',
    sex: 'male',
    initDate: new Date(),
    state: 'married'
  },
  {
    name: 'Ringo Starr', 
    email: 'ringo.starr@email.com',
    phone: '11223347',
    sex: 'male',
    initDate: new Date(),
    state: 'married'
  },
  {
    name: 'Sagrario Cadena', 
    email: 'sagrario.cadena@email.com',
    phone: '11223348',
    sex: 'female',
    initDate: new Date(),
    state: 'married'
  },
  {
    name: 'Jose Barajas', 
    email: 'jose.barajas@email.com',
    phone: '11223349',
    sex: 'male',
    initDate: new Date(),
    state: 'married'
  }];

  constructor() { }

  getEmployees() {
    return this.listEmployee.slice();
  }

  removeEmployee(index: number) {
    this.listEmployee.splice(index, 1);
  }

  addEmployee(employee: Employee) {
    this.listEmployee.push(employee);
  }

  getEmployee(index: number) {
    return this.listEmployee[index];
  }

  editEmployee(employee: Employee, idEmployee: number) {
    this.listEmployee[idEmployee].name = employee.name;
    this.listEmployee[idEmployee].email = employee.email;
    this.listEmployee[idEmployee].initDate = employee.initDate;
    this.listEmployee[idEmployee].phone = employee.phone;
    this.listEmployee[idEmployee].state = employee.state;
    this.listEmployee[idEmployee].sex = employee.sex;
  }
}
