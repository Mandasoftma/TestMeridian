import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { RadioButtonModule } from 'primeng/components/radioButton/radioButton';
import { MenuModule } from 'primeng/components/menu/menu';
import { ToolbarModule } from 'primeng/components/toolbar/toolbar';
import { SplitButtonModule } from 'primeng/components/splitbutton/splitbutton';

import { InputTextModule} from 'primeng/components/inputtext/inputtext';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { DataViewModule } from 'primeng/components/dataview/dataview';
import { CardModule } from 'primeng/components/card/card';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { FileUploadModule } from 'primeng/components/fileupload/fileupload';
import { TableModule } from 'primeng/components/table/table';
import { ToastModule } from 'primeng/components/toast/toast';


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase,AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { environment } from '../environments/environment';
import { RestService } from "./provider/rest.service";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { ForgotComponent } from './componentes/forgot/forgot.component';
import { ProductComponent } from './componentes/products/product/product.component';
import { ListproductComponent } from './componentes/products/listproduct/listproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    ProductComponent,
    ListproductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    InputTextModule,
    DialogModule,
    MenuModule,
    ToolbarModule,
    SplitButtonModule,
    DataViewModule,
    CardModule,
    CalendarModule,
    FileUploadModule,
    TableModule,
    ToastModule,

    routing,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpModule    
  ],
  providers: [
    RestService,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
