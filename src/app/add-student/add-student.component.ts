import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [ HttpClientModule,RouterLink, RouterLinkActive, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent implements OnInit{

  @ViewChild('backHome') backHome:TemplateRef<any> | undefined;
  constructor(private http: HttpClient,private modalAdd: NgbModal){
    
  }
  ngOnInit(): void {

  }
  

  postData(data:any){
    this.http.post('http://localhost:8081/addStudent',data).subscribe((res)=>{
      console.log(res);
      this.modalAdd.open(this.backHome);
      
    });
  }

  onStudentCreate(students : {name:String,address:String, className:String,  birthDay:Date}){
    console.log(students);
    this.postData(students);
  }


}
