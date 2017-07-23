import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeService {
  constructor(private http:Http) { }
  fetchEmployeesData(){
    return this.http.get('data/employees.json');
  }

}
