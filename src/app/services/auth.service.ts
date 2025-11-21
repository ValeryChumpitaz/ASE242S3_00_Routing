import { Injectable } from '@angular/core';

/**
 * Servicio encargado de gestionar la autenticación de usuarios dentro de la aplicación.
 * 
 * Funciones principales:
 * - Validar credenciales y permitir el inicio de sesión.
 * - Identificar si el usuario está autenticado.
 * - Determinar el rol asignado (usuario o administrador).
 * - Cerrar sesión y limpiar los datos almacenados.
 * 
 * Este servicio es utilizado por los Guards para proteger rutas y 
 * controlar el acceso dependiendo del tipo de usuario.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {

  /**
   * Variable interna que almacena los datos del usuario autenticado.
   * Contiene el nombre de usuario y el rol asignado.
   */
  private user: { username: string; role: 'user' | 'admin' } | null = null;

  /**
   * Método encargado del proceso de inicio de sesión.
   * Verifica si las credenciales coinciden con los usuarios permitidos
   * (admin o user) y asigna el rol correspondiente.
   * 
   * @param username Nombre de usuario ingresado
   * @param password Contraseña ingresada
   * @returns true si la autenticación es correcta; false en caso contrario
   */
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin123') {
      this.user = { username, role: 'admin' };
      return true;
    } else if (username === 'user' && password === 'user123') {
      this.user = { username, role: 'user' };
      return true;
    }
    return false;
  }

  /**
   * Cierra la sesión del usuario y limpia la información almacenada.
   */
  logout() {
    this.user = null;
  }

  /**
   * Verifica si existe un usuario autenticado actualmente.
   * @returns true si hay sesión activa; false si no existe
   */
  isLoggedIn(): boolean {
    return this.user !== null;
  }

  /**
   * Indica si el usuario autenticado pertenece al rol administrador.
   * @returns true si el usuario es admin; false en cualquier otro caso
   */
  isAdmin(): boolean {
    return this.user?.role === 'admin';
  }

  /**
   * Obtiene el nombre del usuario que inició sesión.
   * @returns nombre del usuario o null si no hay sesión activa
   */
  getUsername(): string | null {
    return this.user?.username || null;
  }
}
