import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-employees',
  styleUrl: './employees.css',
  templateUrl: './employees.html',
})
export class Employees {
  searchTerm = '';
  employees = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@example.com',
      department: 'IT',
      position: 'Software Engineer',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      department: 'HR',
      position: 'HR Manager',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'michael@example.com',
      department: 'Finance',
      position: 'Accountant',
      status: 'Inactive'
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily@example.com',
      department: 'IT',
      position: 'QA Engineer',
      status: 'Active'
    }
  ];
  
  onSearch(event: Event) {
  const input = event.target as HTMLInputElement;
  this.searchTerm = input.value;
  }

  get filteredEmployees() {
  const search = this.searchTerm.toLowerCase().trim();

  return this.employees.filter(employee =>
    employee.name.toLowerCase().includes(search) ||
    employee.email.toLowerCase().includes(search) ||
    employee.department.toLowerCase().includes(search)
  );
}
}
