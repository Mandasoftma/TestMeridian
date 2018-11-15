import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { ForgotComponent } from './componentes/forgot/forgot.component';


const appRoutes: Routes = [
	  { path: 'login', component: LoginComponent },
	  { path: 'register', component: RegisterComponent },
	  { path: 'forgot', component: ForgotComponent },
	  { path: 'home', component: HomeComponent },
	  { path: '**', component: LoginComponent }
	];
	
export const routing = RouterModule.forRoot(appRoutes);