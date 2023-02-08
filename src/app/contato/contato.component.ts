import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

  formContato = this.fb.group({
    nome: ["", [
      Validators.minLength(4),  //tamnaho minimo
      Validators.required     //significa que o nome é obrigatorio
    ]],
    assunto:["", [
      Validators.minLength(10),
      Validators.required

  ]],

    telefone: ["", [
       Validators.minLength(11),
       Validators.required

    ]],
     email: ["", [
      Validators.email,
      Validators.required
     ]],

     mensagem:["", [
      Validators.minLength(20),
      Validators.required
     ]]






  })


  constructor(private fb:FormBuilder){


  }


  enviarFormulario(){
    alert("formulario enviado com sucesso");
    this.formContato.reset()
  }

  }


