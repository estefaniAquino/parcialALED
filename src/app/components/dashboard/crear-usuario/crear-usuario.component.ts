import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit{
  
  sexo: any[]=['Masculino', 'Femenino']
  form: FormGroup;
  _usuarioService: any;
  

  constructor(private fb: FormBuilder, private_usuarioService: UsuarioService ){ 
    this.form = this.fb.group({
      usuario:['', Validators.required],
      nombre: ['', Validators.required],
      apellido:['', Validators.required],
      sexo:['', Validators.required],
    })
  }
ngOnInit(): void {
  }

  agregarUsuario(){

    const user: Usuario= {
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      sexo: this.form.value.sexo,
    }

    this._usuarioService.agregarUsuario(user)
  }

}
