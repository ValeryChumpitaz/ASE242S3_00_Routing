import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
 
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  providers: [AuthService], // <-- importante
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  totalProductos: number = 120;
  totalUsuarios: number = 45;
  totalVentas: number = 350;

  constructor(public auth: AuthService) {} // ahora Angular puede inyectarlo
}
