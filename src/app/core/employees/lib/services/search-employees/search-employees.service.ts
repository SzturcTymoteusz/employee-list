import {Injectable} from '@angular/core';
import {SearchEmployees} from "./search-employees";
import {QueryOption} from "../../../modules/listing/lib/models/query-option";
import {DataStore} from "../data-store/data-store";
import {Row} from "../../../modules/listing/lib/models/row";
import {Employee} from 'src/app/core/employees/lib/models/employee';
import {Sort} from '../../../modules/listing/lib/models/sort';

@Injectable()
export class SearchEmployeesService implements SearchEmployees {
  constructor(private dataStore: DataStore) {
  }

  search(queryOptions: QueryOption): Row {
    const availableEmployeeResources = this.getEmployeesBySearchOptions(queryOptions.search);
    const availableEmployeeResourcesNumber = availableEmployeeResources.length;
    const sortedAvailableEmployeeResources = this.sortAvailableEmployeeResources(availableEmployeeResources, queryOptions.options.sort);

    const itemPerPage = queryOptions.options.itemsPerPage;
    const currentPage = this.prepareCurrentPage(availableEmployeeResourcesNumber, queryOptions.options.page, itemPerPage);
    const totalPages = Math.ceil(availableEmployeeResourcesNumber / queryOptions.options.itemsPerPage);
    const hasNextPage = currentPage + 1 <= totalPages;
    const hasPrevPage = currentPage - 1 !== 0;
    const nextPage = hasNextPage ? currentPage + 1 : null;
    const prevPage = hasPrevPage ? currentPage - 1 : null;

    const preparedReturnedEmployeeResources = this.getProperEmployeeResources(sortedAvailableEmployeeResources, currentPage, itemPerPage)

    return {
      items: preparedReturnedEmployeeResources,
      page: currentPage,
      hasNextPage,
      hasPrevPage,
      nextPage,
      prevPage,
      totalItems: availableEmployeeResourcesNumber,
      totalPages
    }
  }

  private getEmployeesBySearchOptions(searchOptions: { [key: string]: string }): Employee[] {
    const availableEmployeeResources = this.dataStore.data;

    return availableEmployeeResources.filter(employee => {
      return Object.keys(searchOptions).every((query) => {
        return this.checkStringStartWithExpression((employee[query as keyof Employee] as string), searchOptions[query])
      })
    })
  }

  private checkStringStartWithExpression(string: string, expression: string): boolean {
    return this.removeWhitespace(string.toLowerCase()).startsWith(this.removeWhitespace(expression.toLowerCase()))
  }

  private removeWhitespace(expression: string): string {
    return expression.split('').filter(char => char !== ' ').join('');
  }

  private sortAvailableEmployeeResources(employees: Employee[], sortOptions: Sort): Employee[] {
    if (sortOptions.sortColumnIndex === null || sortOptions.sortDirection === 'none') {
      return employees;
    }

    return [...employees.sort(((first, second) => {
      const sortDirection = sortOptions.sortDirection;
      const firstValue = first[sortOptions.sortColumnIndex as keyof Employee] as string;
      const secondValue = second[sortOptions.sortColumnIndex as keyof Employee] as string;

      if (firstValue < secondValue) {
        return sortDirection === 'asc' ? -1 : 1
      }

      if (firstValue > secondValue) {
        return sortDirection === 'asc' ? 1 : -1
      }

      return 0
    }))]
  }

  private prepareCurrentPage(totalAvailableEmployeesResources: number, currentPage: number, itemPerPage: number): number {
    let newCurrentPage = currentPage;
    let startItemIndex = (newCurrentPage - 1) * itemPerPage + 1;

    if (newCurrentPage === 1 || newCurrentPage === 0) {
      return 1
    }

    while (!(startItemIndex <= totalAvailableEmployeesResources)) {
      newCurrentPage--;
      startItemIndex = (newCurrentPage - 1) * itemPerPage + 1
    }

    return newCurrentPage;
  }

  private getProperEmployeeResources(employees: Employee[], currentPage: number, itemPerPage: number): Employee[] {
    return employees.slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage)
  }
}
