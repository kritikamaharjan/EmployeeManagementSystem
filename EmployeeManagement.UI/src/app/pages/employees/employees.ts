import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-employees',
  styleUrl: './employees.css',
  templateUrl: './employees.html',
})
export class Employees {
  errorMessage = '';
  showAddForm = false;
  editingEmployeeId: number | null = null;
  selectedEmployee: any = null;

  newEmployee = {
  name: '',
  email: '',
  department: '',
  position: '',
  status: 'Active'
  };

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

  toggleAddForm() {
    if (!this.showAddForm) {
      this.resetForm();
      this.showAddForm = true;
    } else {
      this.showAddForm = false;
    }
  }

  resetForm() {
  this.newEmployee = {
    name: '',
    email: '',
    department: '',
    position: '',
    status: 'Active'
  };
  this.errorMessage = '';
  }

  addEmployee() {
    this.errorMessage = ''; 
    if (
      !this.newEmployee.name.trim() ||
      !this.newEmployee.email.trim() ||
      !this.newEmployee.department ||
      !this.newEmployee.position.trim()
    ) {
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }

    

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(this.newEmployee.email.trim())) {
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }


    if (this.editingEmployeeId !== null) {
      // Update existing employee
      this.employees = this.employees.map(employee =>
        employee.id === this.editingEmployeeId
          ? {
              ...employee,
              ...this.newEmployee
            }
          : employee
      );
    } else {
      // Add new employee
      const employee = {
        id: Math.max(...this.employees.map(e => e.id), 0) + 1,
        ...this.newEmployee
      };

      this.employees.push(employee);
    }

    this.resetForm();
    this.editingEmployeeId = null;
    this.showAddForm = false;
  }

 clearError() {
  this.errorMessage = '';
  }
 closeAddForm() {
  this.resetForm();
  this.showAddForm = false;
 }

 startEdit(employee: any) {
  this.editingEmployeeId = employee.id;

  this.newEmployee = {
    name: employee.name,
    email: employee.email,
    department: employee.department,
    position: employee.position,
    status: employee.status
  };

  this.errorMessage = '';
  this.showAddForm = true;
 }
 
 deleteEmployee(id: number) {
  const confirmed = confirm(
    'Are you sure you want to delete this employee?'
  );

  if (!confirmed) {
    return;
  }

  this.employees = this.employees.filter(
    employee => employee.id !== id
  );
  } 

  viewEmployee(employee: any) {
  this.selectedEmployee = employee;
  }

  closeEmployeeDetails() {
    this.selectedEmployee = null;
  }
}
