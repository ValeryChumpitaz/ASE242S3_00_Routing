import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],  // ← Aquí faltaba RouterLink
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  productos: Producto[] = [
    { id: 1, nombre: 'Cupcake de Chocolate', descripcion: 'Delicioso cupcake con frosting de chocolate', precio: 3.5, imagen: 'https://tse4.mm.bing.net/th/id/OIP.VvC9jQQoYHduetOdQeZs_QHaFj?pid=Api&P=0&h=180' }, 
    { id: 2, nombre: 'Pastel de Fresa', descripcion: 'Pastel con fresas frescas y crema', precio: 15, imagen: 'https://tse1.mm.bing.net/th/id/OIP.uU5lAz6lpNooK8LJ8G_zcQHaFZ?pid=Api&P=0&h=180' }, 
    { id: 3, nombre: 'Galletas Decoradas', descripcion: 'Galletas caseras decoradas a mano', precio: 1.5, imagen: 'https://lasdeliciasdevivir.net/wp-content/uploads/2008/04/Galletas-Decoradas-2-Receta-Las-Delicias-Del-Buen-Vivir.jpg' }
  ];

  constructor(public auth: AuthService) {}
}
