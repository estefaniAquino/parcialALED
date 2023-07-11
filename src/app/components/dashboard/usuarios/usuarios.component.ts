import { OnInit, ViewChild } from '@angular/core';
import {Component} from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { Usuario } from 'src/app/interfaces/usuarios';
import { MatSort } from '@angular/material/sort';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{
 listUsuarios: Usuario[]=[];

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo'];
  dataSource = listUsuarios;
  dataSource! =  MatTableDataSource <any>;
 
@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

  constructor( private usuarioService: UsuarioService){ 

  }
  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario(){
    this.listUsuarios=this.usuarioService.getUsuario();
    this.dataSource = new MatTableDataSource(this.listUsuarios)
  }
//filtro
ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  eliminarUsuario(index: number){
    console.log(index);

    this.usuarioService.eliminarUsuario(index);
    this.cargarUsuario(); 

  }



}
