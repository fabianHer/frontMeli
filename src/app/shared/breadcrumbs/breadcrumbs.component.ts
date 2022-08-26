import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.sass']
})
export class BreadcrumbsComponent implements OnDestroy {
  
  public titulo: string;
  public tituloSubs$: Subscription;

  constructor( private router: Router, 
               private route: ActivatedRoute,
              @Inject(PLATFORM_ID) private platformId) { 


    if(isPlatformBrowser(this.platformId)){
      this.tituloSubs$ = this.getArgumentosRuta()
    .subscribe( ({ titulo }) => {
        this.titulo = titulo;
        document.title = `Meli - ${ titulo }`;
    });
    }
    
  }

  ngOnDestroy(): void {
    if(isPlatformBrowser(this.platformId)){
    this.tituloSubs$.unsubscribe();
    }
  }


  getArgumentosRuta() {

    return this.router.events
      .pipe(
        filter( event => event instanceof ActivationEnd ),
        filter( (event: ActivationEnd) => event.snapshot.firstChild === null  ),
        map( (event: ActivationEnd) => event.snapshot.data ),
      );
  }

}
