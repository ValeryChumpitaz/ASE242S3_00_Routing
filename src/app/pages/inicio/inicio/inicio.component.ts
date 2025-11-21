import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  destacados: Producto[] = [
    { id: 1, nombre: 'Cupcake de Chocolate', descripcion: 'Delicioso cupcake con frosting de chocolate', precio: 3.5, imagen: 'https://www.chocolatto.co/wp-content/uploads/2020/07/IMG_0170-scaled.jpg' },
    { id: 2, nombre: 'Pastel de Fresa', descripcion: 'Pastel con fresas frescas y crema', precio: 15, imagen: 'https://tse4.mm.bing.net/th/id/OIP.fDEU141UIcEPRIucvmnhnAHaHa?pid=Api&P=0&h=180' },
    { id: 3, nombre: 'Galletas Decoradas', descripcion: 'Galletas caseras decoradas a mano', precio: 1.5, imagen: 'https://tse2.mm.bing.net/th/id/OIP.AagDs9nqMoxwYKkt18yRowHaGq?pid=Api&P=0&h=180' },
      { id: 4, nombre: 'Cupcake de Chocolate', descripcion: 'Delicioso cupcake con frosting de chocolate', precio: 3.5, imagen: 'https://www.chocolatto.co/wp-content/uploads/2020/07/IMG_0170-scaled.jpg' },
    { id: 5, nombre: 'Pastel de Fresa', descripcion: 'Pastel con fresas frescas y crema', precio: 15, imagen: 'https://tse4.mm.bing.net/th/id/OIP.fDEU141UIcEPRIucvmnhnAHaHa?pid=Api&P=0&h=180' },
    { id: 6, nombre: 'Galletas Decoradas', descripcion: 'Galletas caseras decoradas a mano', precio: 1.5, imagen: 'https://tse2.mm.bing.net/th/id/OIP.AagDs9nqMoxwYKkt18yRowHaGq?pid=Api&P=0&h=180' },
  ];
}
