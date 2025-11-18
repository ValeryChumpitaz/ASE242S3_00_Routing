import { Routes } from '@angular/router';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { DetalleProductosComponent } from './pages/detalle-productos/detalle-productos.component';

export const routes: Routes = [

    {
        path: '',
        component: ListaProductosComponent
    },
    {
        path: 'productos/:id',
        component: DetalleProductosComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
