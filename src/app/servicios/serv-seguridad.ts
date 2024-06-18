import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Injectable(
    {
        providedIn: 'root'
    })

export class SeguridadServicio {
    constructor(private fb: FormBuilder, private http: HttpClient) { }
    BaseURI = "";

    Datos = this.fb.group(
        {
            usuario: [null, Validators.required],
            password: [null, Validators.required],
        });

    VALIDAR_USUARIO() {
        var body =
        {
            usuario: this.Datos.value.usuario,
            password: this.Datos.value.usuario
        };
        console.log(body);
        //return this.http.post(this.BaseURI + '/seguridad/VALIDAR_USUARIO/', body);
        return body;
    }
}