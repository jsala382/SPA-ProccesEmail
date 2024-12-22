import { afterNextRender, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormularioUsuarioService } from './formularioUsuarioService';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrl: './formulario-usuario.component.css'
})
export class FormularioUsuarioComponent {
  usuario = {name: '', apellido:'', fechaNacimiento:''}
  mensaje: string | null=null;
  constructor(private usuarioService: FormularioUsuarioService){};

  guardar(formulario:NgForm){
    if(formulario.valid){
      const datoUsuario={
        name: formulario.value.name,
        apellido: formulario.value.apellido,
        fechaNacimiento: new Date (formulario.value.fechaNacimiento),
      } ;

      this.usuarioService.enviarUsuario(datoUsuario).subscribe({
        next: ()=>(this.mensaje='Datos enviados correctamente'),
        error: () => (this.mensaje = 'Error al enviar los datos.')
      });
    }
  }

}
