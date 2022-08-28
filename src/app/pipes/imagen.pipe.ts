import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {
  
//devuelve la ruta de la imagen
  transform( img: string): string {
    if ( img ) {
      return `../../../assets/images/${img}`;
    }
  }
}
