import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class ProductoDetalleComponent {

  id!: number;
  producto: any;

  productos = [
    {
      id: 1,
      nombre: "Cupcake de Fresas",
      precio: 8.50,
      imagen: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40",
      descripcion: "Bizcocho suave con crema de fresa natural."
    },
    {
      id: 2,
      nombre: "Cheesecake de Frutos Rojos",
      precio: 14.90,
      imagen: "https://images.unsplash.com/photo-1505253216365-7483c0c1e1a1",
      descripcion: "Cheesecake cremoso con frutos rojos frescos."
    },
    {
      id: 3,
      nombre: "Torta de Chocolate",
      precio: 18.00,
      imagen: "https://images.unsplash.com/photo-1599785209707-e8264c67a89e",
      descripcion: "Torta húmeda de chocolate artesanal."
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = this.productos.find(p => p.id === this.id);
  }

  volver(): void {
    this.router.navigate(['/']);
  }
}
