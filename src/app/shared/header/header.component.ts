import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  filterData: String='';
  imagenMeli: string ='meli.png';
  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  //Permite llegar al componente de buscar en el caso de que filter data contenga un valor
  buscar() {
    if (this.filterData.length === 0  ) {
      return;
    }
    this.router.navigateByUrl(`/dashboard/buscar/${ this.filterData }`);
  }
}
