import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studentForm: FormGroup;
  constructor(private fb: FormBuilder) {
    
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.min(18)]]
    });
  }
  students = [
    { id: 1, name: 'Akanksha', branch: 'IT' },
    { id: 2, name: 'Shreya', branch: 'CSE' },
    { id: 3, name: 'Ram', branch: 'ECE' }
  ];
  
  selectedStudent: any = null;
  
  addStudent(id: any, name: any, branch: any) {
    this.students.push({
      id: parseInt(id.value, 10),
      name: name.value,
      branch: branch.value
    });

    id.value = '';
    name.value = '';
    branch.value = '';
  }

  deleteStudent(id: any) {
    console.log('Deleted student: ',id)
    this.students = this.students.filter(student => student.id !== id);
  }
  editStudent(student: any) {
    this.selectedStudent = { ...student };
  }

  updateStudent() {
    const index = this.students.findIndex(student => student.id === this.selectedStudent.id);
    if (index !== -1) {
      this.students[index] = { ...this.selectedStudent };
    }
    this.selectedStudent = null; 
  }
  
}