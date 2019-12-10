import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators, FormControlName} from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

formulario = new FormGroup({
  first_name : new FormControl('Sandro', Validators.required),
  last_name : new FormControl(''),
  email : new FormControl(''),
  
})




  // formulario: FormGroup;

  // constructor(public formBuilder: FormBuilder) {
  //   this.formulario = formBuilder.group({
  //     first_name: ['Alex', [Validators.required]],
  //     last_name: ['', [Validators.required]],
  //     email: ['', [Validators.required]]
  //   })
  // }

  teste() {
    console.log(this.formulario.value)
  }

}
