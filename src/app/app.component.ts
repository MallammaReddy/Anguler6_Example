import { Component } from '@angular/core';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
todaydate;
  title = 'Angular 6 + Spring Boot 2 + Spring Data JPA + MySQL + CRUD Tutorial';
  todaysDate = new Date();
  months=["January","March"];
  isavilable=false;
  jsonval={name:'Box',age:'25',address:{a1:'Mumbai',a2:'Karnataka'}};
  
  constructor(private myservice:EmployeeService){}
  ngOnInit(){
  this.todaydate=this.myservice.showTodayDate();
  }
  
  myClickFuncation($event){
  alert("Button clicked");
  this.isavilable=true;
  }
}
