import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees = [];
  pageIndex = 1;
  eCountPerPage = 13;
  totalCount = 0;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeService.fetchEmployeesData().map((response)=>response.json()).subscribe(
      (data)=> {
        this.employees = data
        this.totalCount = Math.ceil(this.employees.length / this.eCountPerPage);
      }
    );
  }
  getEmployees(){
    return this.employees.filter((item,index)=>index<this.eCountPerPage*this.pageIndex && index>this.eCountPerPage*(this.pageIndex-1));
  }
  getNextPage(){
    if (this.pageIndex<this.totalCount) this.pageIndex++;
  }
  getPreviousPage(){
    if (this.pageIndex>1) this.pageIndex--;
  }
  sendInvite(){
    console.log("invited");
  }
}
