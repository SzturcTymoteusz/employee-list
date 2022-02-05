import {Injectable} from "@angular/core";
import {ManageDataStore} from "./manage-data-store";
import {Employee} from "../../models/employee";
import {DataStore} from "../data-store/data-store";

@Injectable()
export class ManageDataStoreService implements ManageDataStore {
  constructor(private dataStore: DataStore) {
  }

  add(employee: Employee) {
    employee.createdAt = this.prepareDate();
    employee.id = this.generateId();
    this.dataStore.addEmployee(employee);
  }

  edit(employee: Employee) {
    this.dataStore.editEmployee(employee.id, employee);
  }

  checkEmailUniqueness() {
    return (email: string, id?: string) => this.dataStore.checkEmailIsUnique(email, id);
  }

  private prepareDate(): number {
    const date = new Date();
    const dateInSeconds = Math.floor(date.getTime() / 1000);
    return dateInSeconds;
  }

  private generateId(): string {
    let id = this.randomString(13);

    while (!this.dataStore.checkIdIsUnique(id)) {
      id = this.randomString(13);
    }

    return id;
  }

  private randomString(length: number): string {
    let str = '';
    for (let i = 1; i <= length; i++) {
      let randomNumber = Math.ceil(Math.random() * 62);
      const isNumber = randomNumber <= 10;
      const isCapitalCase = randomNumber <= 36 && randomNumber > 10;
      const isLowerCase = randomNumber <= 62 && randomNumber > 36;

      if (isNumber) {
        randomNumber += 47;
      }

      if (isCapitalCase) {
        randomNumber += 54;
      }

      if (isLowerCase) {
        randomNumber += 60;
      }

      str += String.fromCharCode(randomNumber);
    }
    return str;
  }

}
