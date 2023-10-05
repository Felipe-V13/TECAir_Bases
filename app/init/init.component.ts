import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { UserService } from '../services/userManagment/user.service';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css'],
})
export class InitComponent implements OnInit {
  public form!: FormGroup; //Formulario utilizado para capturar los datos requeridos
  constructor(
    private formBuilder: FormBuilder,
    private service: ApiService,
    private router: Router,
    private usrManagment: UserService
  ) {}

  public token: any; //Tocken del usuario actual
  data: any = []; //Lista utilizada para enviar los datos del usuario
  student: boolean = false; //Flag para saber si el usuario actual es un estudiante
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      FirstName: ['', [Validators.required]],
      LastName1: ['', [Validators.required]],
      LastName2: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      Ssn: ['', [Validators.required]],
      PhoneNumber: ['', [Validators.required]],
    });
  }
}
