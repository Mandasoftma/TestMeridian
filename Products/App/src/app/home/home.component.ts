import { Component, OnInit } from '@angular/core';
import { RestService } from "../provider/rest.service";
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/components/common/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: MenuItem[];
  products:any[];
  constructor(public Service: RestService, private router: Router) { }

  ngOnInit() {    
    this.items = [
        {label: 'Perfil', icon: 'fa fa-user', url: 'http://angular.io'},
        {label: 'Logout', icon: 'fa fa-power-off', routerLink: ['/theming']}
    ];
    // this.getAllProducts();
  }

  // getAllProducts() {
  //  this.Service.GetAllProducts()
  // }

}
