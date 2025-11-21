# 🍰 Proyecto Pastelería Angular

## ✨ Descripción

Bienvenido a la **aplicación web de pastelería** desarrollada en **Angular 16**.

Esta aplicación permite:

* 🥐 Ver productos y sus detalles
* 🔑 Iniciar sesión y acceder a un dashboard personalizado
* 🛠 Administradores pueden gestionar usuarios y productos

La interfaz está diseñada con **colores pastel**, tipografía elegante y un diseño **responsive** y moderno.

---

## 🛠 Tecnologías utilizadas

* Angular 16 (Standalone Components)
* TypeScript
* HTML5 & CSS3
* Servicios y Guards de Angular para autenticación
* [Opcional] Conexión a base de datos (Firebase, MongoDB, MySQL, etc.)

---

## 📁 Estructura del proyecto

```
src/
 ├── app/
 │    ├── pages/
 │    │    ├── inicio/                 # Página de inicio
 │    │    ├── login/                  # Componente Login
 │    │    ├── dashboard/              # Dashboard usuario
 │    │    └── admin-dashboard/        # Dashboard administrador
 │    ├── components/
 │    │    └── navbar/                 # Navbar
 │    ├── services/
 │    │    └── auth.service.ts         # Servicio de autenticación
 │    ├── guards/
 │    │    ├── auth.guard.ts           # Protección rutas usuario
 │    │    └── admin.guard.ts          # Protección rutas admin
 │    └── app.routes.ts                # Configuración de rutas
```

---

## 👤 Funcionalidades

### Usuario normal

* 🥐 Ver productos y detalles
* 📋 Acceder al dashboard personal
* 🔒 Cerrar sesión

### Administrador

* 🛠 Acceder al dashboard de administración
* 👥 Ver y gestionar todos los usuarios
* 🍰 Gestionar productos

---

## 🚀 Instalación

1. Clonar el repositorio:

```bash
git clone <url-del-repositorio>
cd proyecto-pasteleria-angular
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar la aplicación:

```bash
ng serve
```

4. Abrir en el navegador:

```
http://localhost:4200
```

---

## 🎯 Uso

1. Abrir la página de inicio para ver los productos
2. Iniciar sesión con un usuario registrado o crear uno nuevo (si se implementa registro)
3. Acceder al dashboard según el rol (usuario o administrador)
4. Cerrar sesión desde el navbar cuando sea necesario

---

## 📝 Notas importantes

* Todos los estilos están diseñados para una experiencia visual **bonita y coherente** con temática de pastelería 🍩
* La autenticación se maneja mediante **servicios y guards de Angular**
* Este proyecto sirve como base para **conectar con bases de datos reales**
* Cada estudiante debe **integrar el login y registro en su propio proyecto**, no usar proyectos de ejemplo de otros

---

## 👩‍💻 Autores

* **Valery** – Desarrollo completo de componentes, rutas, servicios, guards y estilos

---
 
