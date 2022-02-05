import {Injectable} from '@angular/core';
import {DataStore} from "./data-store";
import {Employee} from "../../models/employee";
import * as employeesData from '../../data/data.json';

@Injectable()
export class DataStoreService implements DataStore {
  private _data: Employee[] = []

  constructor() {
    this.prepareData();
  }

  get data(): Employee[] {
    return this._data;
  }

  removeById(id: string): void {
    const employee = this._data.find(employee => employee.id === id);
    if (employee) {
      const employeeIndex = this._data.indexOf(employee);
      this._data.splice(employeeIndex, 1);
    }
  }

  getEmployee(id: string): Employee | null {
    const employee = this._data.find(employee => employee.id === id);
    return employee ? employee : null;
  }

  editEmployee(id: string, employee: Employee) {
    const employeeFound = this._data.find(employee => employee.id === id);
    if (employeeFound) {
      const employeeIndex = this._data.indexOf(employeeFound);
      this._data[employeeIndex] = employee;
    }
  }

  addEmployee(employee: Employee) {
    this._data.push(employee);
  }

  checkIdIsUnique(id: string): boolean {
    const employee = this._data.find(employee => employee.id === id);
    return !employee;
  }

  checkEmailIsUnique(email: string, id?: string): boolean {
    const employees = this._data.filter(employee => employee.email === email);

    if (!id) {
      return !employees[0];
    }

    return employees.every(employee => employee.id == id);
  }

  private prepareData() {
    // @ts-ignore
    this._data = (employeesData.default as Employee[]);
  }
}
