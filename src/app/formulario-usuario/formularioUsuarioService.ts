import { Injectable } from '@angular/core';
import { FetchBackend, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioUsuarioService {
  private apiUrl = 'http://localhost:8080/api/mail/send'; // Cambia a tu ruta backend

  constructor(private http: HttpClient) {}

  enviarUsuario(usuario: { name: string; apellido: string; fechaNacimiento: Date }): Observable<any> {
    const formated= usuario.fechaNacimiento.toISOString().split('T')[0];
    const params= new HttpParams()
    .set('name', usuario.name)
    .set('apellido', usuario.apellido)
    .set('fechaNacimiento',formated)
    console.log('Fecha formateada:', formated); 
    return this.http.post(this.apiUrl, null,{params});
  }
}