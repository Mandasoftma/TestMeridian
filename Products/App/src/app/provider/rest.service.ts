import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Product } from '../model/product';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs';
import { tick } from '@angular/core/testing';
import { Http } from '@angular/http';


@Injectable()
export class RestService {

  user: Observable<firebase.User>;
  list_products: AngularFireList<any>;
  NewProduct: Product = new Product();
   

  constructor(private firebaseAuth: AngularFireAuth
              ,private af: AngularFireDatabase
              ,private http:Http
              ) {
              this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string):any {
    return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password);    
  }

  login(email: string, password: string):any {
    return this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  forgot(email:string):any{
    return this.firebaseAuth
    .auth
    .sendPasswordResetEmail(email);
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }
  //******** Productos */
  //Obtener todos los productos
  GetAllProducts(){
    this.list_products = this.af.list('Products');
    return this.list_products;
  }

  
  //Crear un nuevo poducto
  InsertProduct(pro:Product,img:string,Cupon:string,fecha:string){    
    try {        
        this.list_products.push({
            Nombre :pro.Nombre,
            Descripcion :pro.Descripcion,
            Lanzamiento : fecha,
            EmailFabricante :pro.EmailFabricante,
            PaisFabricante :pro.PaisFabricante,
            Precio :pro.Precio,
            Disponibilidad :pro.Disponibilidad,
            Vendidas :pro.Vendidas,
            Cupon: Cupon,
            Imagen :img
        });
        alert("Registro creado exitosamente");
    }catch (e){
      console.log("Error al insertar producto: ",e);
    }
    
  }
  

  //Actaulizar producto
  UpdateProducto(pro:Product,img:string,Cupon:string,fecha:string){
    try{
      this.list_products.update(pro.$Id,{
          Nombre :pro.Nombre,
          Descripcion :pro.Descripcion,
          Lanzamiento :fecha,
          EmailFabricante :pro.EmailFabricante,
          PaisFabricante :pro.PaisFabricante,
          Precio :pro.Precio,
          Disponibilidad :pro.Disponibilidad,
          Vendidas :pro.Vendidas,
          Cupon: Cupon,
          Imagen :img
      })
      alert("Registro creado exitosamente");
    }catch (e){
      console.log("Error al intentar actualizar producto: ",e);
    }
    
  }

  //Borrar un Producto
  DeleteProduct($Id:string){
    this.list_products.remove($Id);
  }

  EnviarImg(data){
    return this.http.post('http://products:8090/Api/imgUpload.php',data);
  }

  
  
}
