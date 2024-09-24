import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  selectedValue: string;

  onRadioChange(event: any) {
    this.selectedValue = event.value; // Captura el valor seleccionado
  }

  getImageForRole(role: string): string {
    switch (role) {
      case 'ejecutivo':
        return 'assets/images/ejecutivo.png'; // Ruta de la imagen del ejecutivo
      case 'gerente':
        return 'assets/images/gerente.png'; // Ruta de la imagen del gerente
      case 'supervisor':
        return 'assets/images/supervisor.png'; // Ruta de la imagen del supervisor
      case 'administrativo':
        return 'assets/images/administrativo.png'; // Ruta de la imagen administrativo
      default:
        return '';
    }
  }

  getDescriptionForRole(role: string): string {
    switch (role) {
      case 'ejecutivo':
        return 'Un Ejecutivo de Ventas se encarga de gestionar las relaciones con los clientes y generar ingresos para la empresa.';
      case 'gerente':
        return 'El Gerente supervisa las operaciones diarias y toma decisiones estratégicas para el crecimiento del negocio.';
      case 'supervisor':
        return 'Un Supervisor lidera equipos de trabajo y se asegura de que se cumplan los objetivos establecidos.';
      case 'administrativo':
        return 'El Administrativo gestiona la documentación y coordina las actividades de la oficina para un funcionamiento eficiente.';
      default:
        return '';
    }
  }
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required],
      codigoPostal: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      puesto: ['', Validators.required],
      empresa: ['', Validators.required],
      aniosExperiencia: ['', Validators.required],
    });
    this.fourthFormGroup = this._formBuilder.group({
      gradoAcademico: ['', Validators.required],
      institucion: ['', Validators.required],
    });
  }
}