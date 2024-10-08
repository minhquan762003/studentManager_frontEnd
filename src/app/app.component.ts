import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterOutlet,RouterLink } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { AddStudentComponent } from './add-student/add-student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddStudentComponent,RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {

}
