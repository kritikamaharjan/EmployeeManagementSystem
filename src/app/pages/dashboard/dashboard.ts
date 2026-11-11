import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  totalEmployees = 125;
  activeEmployees = 110;
  inactiveEmployees = 15;
  departments = 6;
}
