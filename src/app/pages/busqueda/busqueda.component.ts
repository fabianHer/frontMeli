import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusquedasService } from 'src/app/services/busquedas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.sass']
})
export class BusquedaComponent implements OnInit {
  datosRespuesta: [];
  esperando: boolean = true;
  noData: boolean = false;

  constructor( private activatedRoute: ActivatedRoute,
               private busquedasService: BusquedasService,
               private router: Router) { }

  ngOnInit(): void {
 
    this.activatedRoute.params
    .subscribe( ({ termino }) => this.busquedaGlobal( termino ));
  }

  busquedaGlobal( termino: string ) {
    this.datosRespuesta = [];
    this.esperando = true;
    this.busquedasService.busquedaGlobal(termino).subscribe((respuesta: any) =>{      
    if(respuesta.datosRespuesta[0].items.length > 0){
      this.datosRespuesta = respuesta.datosRespuesta[0].items;
    } else {
      this.noData = true;
    }
   }, err=> {   
    console.log(err);
    });
    this.esperando = false;

  }
  detalleProducto(idProducto: string){    
    this.router.navigateByUrl(`/dashboard/buscarDetalle/${ idProducto }`);
  }

}
