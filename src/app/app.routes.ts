import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeService } from './employee.service';
import { FooterComponent } from './footer/footer.component';
import { RostersComponent } from './rosters/rosters.component';
import { RosteringComponent } from './rostering/rostering.component';
import { TodolistComponent } from './todolist/todolist.component';


const appRoutes: Routes = [
    {
        path:'employees',
        component: EmployeesComponent
      },
      {
        path:'rosters',
        component: RostersComponent
      },
      {
        path:'rostering',
        component: RosteringComponent
      },
      {
        path:'todolist',
        component: TodolistComponent
      }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);