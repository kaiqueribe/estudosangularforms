import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formulario: FormGroup = this.formBuilder.group({});

  cadastrar(){
      console.log('Formulário enviado');
  }


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required]],
      username: ['',  [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  OnSubmit(){
    console.log("OnSubmit")
  }
  
  
}
