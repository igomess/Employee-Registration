import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import {HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData: Employee;
  list: Employee[];

  readonly rootURL = "http://localhost:55539/api/";

  constructor(private http: HttpClient) { }

  refreshList(){
    this.http.get(this.rootURL + '/Employee').toPromise().then(res => this.list = res as Employee[]);
  }

  postEmployee(formData: Employee){
    
    formData.EmployeeID = undefined;
    console.log(formData.Email);

    return this.http.post(this.rootURL + '/Employee', formData);
  }

  putEmployee(formData: Employee){
    return this.http.put(this.rootURL + '/Employee/' + formData.EmployeeID, formData);
  }

  deleteEmployee(id: number){
    return this.http.delete(this.rootURL + '/Employee/' + id);
  }

}
