import { Component, OnInit } from '@angular/core';
import { RestService } from "../../../provider/rest.service";
import { NgForm } from '@angular/forms';
import { Product } from '../../../model/product';
import { element } from '@angular/core/src/render3/instructions';


@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css'],
})
export class ListproductComponent implements OnInit {
  listPro: Product[];
  selectedProduct: Product;
  displayDialog: boolean;

  constructor(public Service: RestService) { }

  ngOnInit() {
    this.getListProduct();
  }

  getListProduct(){
      this.Service.GetAllProducts()
      .snapshotChanges()
      .subscribe(Data =>{
        this.listPro = [];
        Data.forEach(element => {
          let item = element.payload.toJSON();
          item["$Id"] = element.key;
          this.listPro.push(item as Product);
        });
      });
  }

  selectProduct(event: Event, car: Product) {     
      this.selectedProduct = car;
      this.displayDialog = true;
      event.preventDefault();
  }

  onDialogHide() {
      this.selectedProduct = null;
      this.displayDialog = false;
  }
  

  OnEdit(EditPro:Product){
      this.Service.NewProduct = Object.assign({},EditPro)
  }

  OnDelete(Pro:Product){ 
    if(confirm("¿Estás seguro de eliminar el producto "+ Pro.Nombre+ "?")) {
      // console.log("dijo si"+Pro.$Id);
      this.Service.DeleteProduct(Pro.$Id);
    }
  }

  

}
