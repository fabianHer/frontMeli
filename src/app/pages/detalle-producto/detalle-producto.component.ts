import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusquedasService } from 'src/app/services/busquedas.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.sass']
})
export class DetalleProductoComponent implements OnInit {
  datosRespuesta: any;
  esperando: boolean = true;
  noData: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private busquedasService: BusquedasService) { }

  ngOnInit(): void {
    //se obtiene el valor enviado por url
    this.activatedRoute.params
    .subscribe( ({ id }) => this.busquedaDetalle( id ));
  }
  //se busca el producto según el id seleccionado
  busquedaDetalle(id){
    this.esperando = true;
    this.busquedasService.busquedaDetalleProducto(id).subscribe((respuesta: any) =>{
      if(respuesta.datosRespuesta.items){
        this.datosRespuesta = respuesta.datosRespuesta;
      } else {
        this.noData = true;
      }
     }, err=> {   
      console.log(err);
      });
    this.esperando = false;

  }
}
