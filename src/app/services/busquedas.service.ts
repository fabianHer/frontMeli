import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const base_url = environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class BusquedasService {

  constructor( private http: HttpClient ) { }

//se obtiene el token, para este caso no aplica
  get token(): string {
    return localStorage.getItem('token') || '';
  }
//Headers, para este caso aplican
  get headers() {
    return {
      headers: {
        'x-token': ''
      }
    }
  }

  //busqueda de productos según lo digitado en el buscador
  busquedaGlobal( termino: string ) {

    const url = `${ base_url }/buscar/${ termino }`;
    return this.http.get( url, this.headers );

  }
  //busqueda de producto por id
  busquedaDetalleProducto( id: string ) {

    const url = `${ base_url }/detalleProducto/${ id }`;
    return this.http.get( url, this.headers );

  }


}
