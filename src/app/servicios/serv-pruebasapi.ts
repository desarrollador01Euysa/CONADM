
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable(
    {
        providedIn: 'root'
    })

export class PruebasServicio {

    constructor(private fb: FormBuilder, private http: HttpClient) { }

    apiUrl = "http://localhost:9000/api";

    GET_API() {
        return this.http.get(this.apiUrl);
    }
  
    getEmpleados(): Observable<any> {
      return this.http.get(`${this.apiUrl}`);
    }
  
    addEmpleado(empleado: any): Observable<any> {
      return this.http.post(`${this.apiUrl}`, empleado);
    }
  
    deleteEmpleado(id: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }
  
    updateEmpleado(id: number, empleado: any): Observable<any> {
      return this.http.put(`${this.apiUrl}/${id}`, empleado);
    }
}