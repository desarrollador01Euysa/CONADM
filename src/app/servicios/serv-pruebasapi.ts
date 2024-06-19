
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Injectable(
    {
        providedIn: 'root'
    })

export class PruebasServicio {

    constructor(private fb: FormBuilder, private http: HttpClient) { }

    BaseURI = "http://localhost:9000/api";

    GET_API() {
        return this.http.get(this.BaseURI);
    }
}