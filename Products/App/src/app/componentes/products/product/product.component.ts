import { Component, OnInit } from '@angular/core';
import { RestService } from "../../../provider/rest.service";
import { NgForm } from '@angular/forms';
import { Product } from '../../../model/product';
import { database } from 'firebase';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  xevento: any;
  imageSrc: string = '';
  imageSrce: string = '';
  idImg: string = '';
  nCupon : string = 'N/A';
  fecha:String = Date.now().toString();

  constructor(public Service: RestService
              // ,private messageService: MessageService
              ) { }

  ngOnInit() {
    this.Service.GetAllProducts();
    this.ResetModel();
  }

  ProcesarProducto(proForm:NgForm){
    this.fecha = this.funDate(proForm.value.Lanzamiento);
   
    if (proForm.value.Imagen != null) {   
          this.CargarImagen(proForm,this.xevento)
    }else{
      alert("La imagen del producto es requerido.")
    }
       
  }

  

  ResetModel(proForm?:NgForm){
    if(proForm != null)
      proForm.reset();
      this.Service.NewProduct = new Product();
      this.imageSrc =""
  }


handleInputChange(e) {  
  this.xevento = e;
  var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
  var pattern = /image-*/;
  var reader = new FileReader();
  if (!file.type.match(pattern)) {
    alert('invalid format');
    return;
  }
  reader.onload = this._handleReaderLoaded.bind(this);
  reader.readAsDataURL(file);
}
_handleReaderLoaded(e) {
  let reader = e.target;
  this.imageSrc = reader.result;
  // this.imageSrce = reader.result;
  // console.log("Esta es mi consolo")
  // console.log(this.imageSrc)
}

CargarImagen(proForm,event){
  
  let elemento = event.target;
  if(elemento.files.length>0){
    let formData = new FormData();
    formData.append('file',elemento.files[0]);
    this.Service.EnviarImg(formData)
    .subscribe(
      (data) => {
        let jsonres = data.json();
        // this.idImg = jsonres.file;
        if(proForm.value.Cupon != null)
            this.nCupon = proForm.value.Cupon

        if(proForm.value.$Id != null)
          this.Service.UpdateProducto(proForm.value,jsonres.file);
        else
          this.Service.InsertProduct(proForm.value,jsonres.file, this.nCupon,this.fecha.toString());

        this.ResetModel(proForm);
    },(error) => console.log(error.message));
  }
}

funDate(date){
    var dateOut = new Date(date).toLocaleDateString();  
    return dateOut;
  }
}
