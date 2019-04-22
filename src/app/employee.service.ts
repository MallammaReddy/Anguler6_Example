import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = '/api/v1/employees';

  constructor(private http: HttpClient) { }
  
  showTodayDate(){
  let ndate=new Date();
  return ndate;
  }

  getEmployee(id: number): Observable<Object> {
  console.log("hello"+'${this.baseUrl}');
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
  console.log("hello"+'${this.baseUrl}');
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
  console.log("inside delete"+'${this.baseUrl}');
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
  console.log("inside get"+'${this.baseUrl}');
    return this.http.get(`${this.baseUrl}`);
  }
}
