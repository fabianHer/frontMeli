import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';


const base_url = environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class BusquedasService {

  constructor( private http: HttpClient ) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': ''
      }
    }
  }


  busquedaGlobal( termino: string ) {

    const url = `${ base_url }/buscar/${ termino }`;
    return this.http.get( url, this.headers );

  }

  busquedaDetalleProducto( id: string ) {

    const url = `${ base_url }/detalleProducto/${ id }`;
    return this.http.get( url, this.headers );

  }


}
