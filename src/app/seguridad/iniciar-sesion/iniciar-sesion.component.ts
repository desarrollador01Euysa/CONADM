import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PruebasServicio } from 'src/app/servicios/serv-pruebasapi';
import { SeguridadServicio } from 'src/app/servicios/serv-seguridad';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  respuesta: any;
  images: string[] = [
    '/assets/img/image1.jpg',
    '/assets/img/image2.jpg',
    '/assets/img/image3.jpg',
    '/assets/img/image4.jpg',
    '/assets/img/image5.jpg'
  ];
  activeImageIndex: number = 0;
  showLeftInfo = false;
  showRightInfo = false;
  moveLeft = false;
  moveRight = false;
  usua: any;
  contra: any;
  empleados: any;
  constructor(public seguridad: SeguridadServicio,
    fb: FormBuilder,
    public empleadosService: PruebasServicio,
    //public dialogRef: MatDialogRef<DialogAdelantoNomComponent>,
    //@Inject(MAT_DIALOG_DATA) public data, 
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.GET_API();
    this.startCarousel();
    this.getEmpleados();
    this.seguridad.Datos.patchValue({
      usuario: "usuario",
      password: "12345",
    });
  }
  showInfo(side: string) {
    if (side === 'left') {
      this.showLeftInfo = true;
      this.showRightInfo = false;  // Oculta el contenido de la derecha
      this.moveRight = true;
      this.moveLeft = false;       // Asegúrate de que el movimiento a la izquierda esté desactivado
    } else if (side === 'right') {
      this.showRightInfo = true;
      this.showLeftInfo = false;   // Oculta el contenido de la izquierda
      this.moveLeft = true;
      this.moveRight = false;      // Asegúrate de que el movimiento a la derecha esté desactivado
    }
  }

  reset(event: Event) {
    event.stopPropagation();
    this.showLeftInfo = false;
    this.showRightInfo = false;
    this.moveLeft = false;
    this.moveRight = false;
  }

  startCarousel(): void {
    setInterval(() => {
      this.activeImageIndex = (this.activeImageIndex + 1) % this.images.length;
    }, 8000);
  }
  GET_API() {
    this.empleadosService.GET_API().subscribe(
      res => {
        this.respuesta = res;
      },
      err => {

      }
    );
  }
  validar() {
    if (this.seguridad.Datos.valid) {
      const usuario = this.seguridad.Datos.value.usuario;
      const contraseña = this.seguridad.Datos.value.password;
      if (usuario === "usuario") {
        if (contraseña === "12345") {
          this.toastr.success("Bienvenido al sistema", 'CORRECTO.');
          this.router.navigateByUrl('/inicio/principal');
          
        } else {
          this.toastr.error("Contraseña incorrecta", 'ERROR.');
        }
      } else {
        this.toastr.error("Usuario incorrecto", 'ERROR.');
      }
    } else {
      this.toastr.error("Por favor completa los campos requeridos.", 'ERROR.');
    }
    //   this.seguridad.VALIDAR_USUARIO().subscribe(
    //     res => {
    //       this.respuesta = res;

    //     },
    //     err => {

    //     }
    //   );
    
  }


  getEmpleados() {
    this.empleadosService.getEmpleados().subscribe(
      data => this.empleados = data,
      err => console.error(err)
    );
  }

  addEmpleado(empleado: any) {
    this.empleadosService.addEmpleado(empleado).subscribe(
      () => this.getEmpleados(),
      err => console.error(err)
    );
  }

  deleteEmpleado(id: number) {
    this.empleadosService.deleteEmpleado(id).subscribe(
      () => this.getEmpleados(),
      err => console.error(err)
    );
  }

  updateEmpleado(id: number, empleado: any) {
    this.empleadosService.updateEmpleado(id, empleado).subscribe(
      () => this.getEmpleados(),
      err => console.error(err)
    );
  }
}

