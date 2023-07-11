import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario:"Carla", nombre:"Car", apellido: "aquino", sexo: "fem"},
    {usuario:"Carla1", nombre:"Car3", apellido: "aquinosd", sexo: "fem"},
    {usuario:"Carla2", nombre:"Car2", apellido: "aquinodss", sexo: "fem"},
    {usuario:"Carla3", nombre:"Car1", apellido: "aquinowedew", sexo: "fem"},
  ];

  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index:number){
    this.listUsuarios.splice( index, 1)
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }
}
