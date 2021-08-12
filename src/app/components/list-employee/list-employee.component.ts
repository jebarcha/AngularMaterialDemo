import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from '../../services/employee.service';
import { ConfirmationComponent } from '../shared/confirmation/confirmation.component';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'email', 'state', 'initDate', 'sex', 'phone', 'actions'];
  dataSource: any = new MatTableDataSource();
  listEmployees: Employee[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private employeeService: EmployeeService,
              public dialog: MatDialog,
              public snackBar: MatSnackBar) { }

  ngAfterViewInit() {
    this.loadEmployees();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadEmployees() {
    this.listEmployees = this.employeeService.getEmployees();
    this.dataSource = new MatTableDataSource(this.listEmployees);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  deleteEmployee(index: number) {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '350px',
      data: {message: 'Are you sure to remove this employee?'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result == 'Ok') {
        this.employeeService.removeEmployee(index);
        this.loadEmployees();
        this.snackBar.open('Employee was removed successfully!', '', {
          duration: 3000
        });
      }
    });

  }

}
