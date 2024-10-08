import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild, viewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from '../add-student/add-student.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponentComponent } from '../delete-modal-component/delete-modal-component.component';
import { FormsModule } from '@angular/forms';
import  moment from 'moment';
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [HttpClientModule, RouterLink, RouterLinkActive, RouterOutlet, CommonModule, AddStudentComponent,FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {
  editStudent: any = {
    data:{
      address: '',
      birtDay:'' 
    }
  };
  @ViewChild('editSuccess') editSuccess:TemplateRef<any> | undefined;
  idStudentToEdit: any;
  idStudentToDelete: any;
  students: any = [];
  baseUrl = 'http://localhost:8081';
  constructor(private http: HttpClient, private modalService: NgbModal) {
    
  }
  ngOnInit(): void {
    this.fetchStudents();

  }
  fetchStudents() {
    this.http.get(`${this.baseUrl}/all`).subscribe(
      (resp) => {
        this.students = resp;
        console.log(this.students);
      }
    )
  }

  setIdStudentToDelete(id : any): void{
    this.idStudentToDelete = id;
    console.log(this.idStudentToDelete);
  }

  getStudentById(id: any): void{
    this.http.get(`${this.baseUrl}/${id}`).subscribe((res)=>{
      this.idStudentToEdit = id;
      this.editStudent = res;
      this.editStudent.data.birthDay = this.formatDate(this.editStudent.data.birthDay);
      console.log(this.idStudentToEdit);

    })
  }
  
  formatDate(dateString: string): string {
    const date = moment(dateString);
    if (!date.isValid()) {
      console.error('Invalid date format:', dateString);
      return '';
    }
    return date.format('YYYY-MM-DD');
  }
  deleteStudent(){
    this.http.delete(`${this.baseUrl}/${this.idStudentToDelete}`).subscribe((resp)=>{
      
      console.log(resp);
      this.fetchStudents();
      this.showSuccessDeleteModal();
    })
  }

  showSuccessDeleteModal() {
    const modalRef = this.modalService.open(DeleteModalComponentComponent);
  }

  updateStudent(students: {name: String, address: String, className:String, birthDay: Date}){
    console.log(students);
    this.putData(students);
    
  }

  putData(data: any){
    this.http.put(`${this.baseUrl}/${this.idStudentToEdit}`,data).subscribe(
      (resp)=>{
        this.fetchStudents();
        console.log(resp);
        this.modalService.open(this.editSuccess);
      }
    )
    
  }
}
