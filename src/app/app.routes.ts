import { Routes } from '@angular/router';
<<<<<<< HEAD
 import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { InicioComponent } from './pages/inicio/inicio/inicio.component';

export const routes: Routes = [
  { path: '', component: InicioComponent }, // ruta de inicio
   { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: '**', redirectTo: '' } // redirige rutas no definidas al inicio
=======
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { ProductoDetalleComponent } from './pages/detalle-productos/detalle-productos.component';
 
export const routes: Routes = [
  {
    path: '',
    component: ListaProductosComponent
  },
  {
    path: 'productos/:id',
    component: ProductoDetalleComponent
  },
   
  {
    path: '**',
    redirectTo: ''
  }
>>>>>>> 4fd8eb5cada3b0eb951a525e0461944abf0f99ae
];
