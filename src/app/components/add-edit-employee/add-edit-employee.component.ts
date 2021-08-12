import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'accent' },
}]
})
export class AddEditEmployeeComponent implements OnInit {
  states: string[] = ['single', 'married', 'other'];
  idEmployee: any;
  action = 'Create';
  myForm: FormGroup;

  constructor(private fb: FormBuilder, 
              private employeeServce: EmployeeService,
              private route: Router,
              private snackBar: MatSnackBar,
              private aRoute: ActivatedRoute) { 

  this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      initDate: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      state: ['', [Validators.required]],
      sex: ['', [Validators.required]]
    });

    this.idEmployee = this.aRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.idEmployee !== undefined) {
      this.action = 'Edit';
      this.isEdit();
    }
  }

  saveEmployee() {
    const employee: Employee = {
      name: this.myForm.get('name')?.value,
      email: this.myForm.get('email')?.value,
      initDate: this.myForm.get('initDate')?.value,
      phone: this.myForm.get('phone')?.value,
      state: this.myForm.get('state')?.value,
      sex: this.myForm.get('sex')?.value
    };

    if (this.idEmployee !== undefined) {
      this.editEmployee(employee);
    } else {
      this.addEmployee(employee);
    }

    this.snackBar.open('Employee was saved successfully!', '', {
      duration: 3000
    })

    this.route.navigate(['/']);
  }

  addEmployee(employee: Employee) {
    this.employeeServce.addEmployee(employee);
  }

  editEmployee(employee: Employee) {
    this.employeeServce.editEmployee(employee, this.idEmployee);
  }

  isEdit() {
    const employee: Employee = this.employeeServce.getEmployee(this.idEmployee);
    console.log(employee);
    this.myForm.patchValue({
      name: employee.name,
      email: employee.email,
      initDate: employee.initDate,
      phone: employee.phone,
      state: employee.state,
      sex: employee.sex
    });
  }

}
