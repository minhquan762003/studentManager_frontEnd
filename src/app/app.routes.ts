import { Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentComponent } from './student/student.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'/all',
        pathMatch:'full',
    },
    {
        path:'all',
        loadComponent: ()=> import('./student/student.component').then(m =>m.StudentComponent)
    },
    {
        path:'add',
        loadComponent: () => import('./add-student/add-student.component').then(m => m.AddStudentComponent)
    },
];


