<<<<<<< HEAD
# RoutingAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.17.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
=======
# 🍰 Pastelería DulceRuta  
### Proyecto de Routing en Angular (Componentes Standalone)

Este proyecto demuestra el uso de **Routing en Angular**, rutas dinámicas y navegación entre componentes, dentro del contexto de una **pastelería virtual**.  
Incluye una lista de productos, pantalla de detalle y una vista de carrito.

---

## 📘 Características Principales

- Navegación con **routerLink**
- Rutas dinámicas usando **/producto/:id**
- Componentes **standalone**
- Lazy loading en la ruta del carrito
- Estilos temáticos inspirados en una pastelería
- Código simple y perfecto para fines educativos

---

## 📂 Estructura del Proyecto

```

src/app/
├── app.component.ts
├── app.component.html
├── app.component.css
├── app.routes.ts
└── pages/
├── lista-productos/
│     ├── lista-productos.component.ts
│     ├── lista-productos.component.html
│     └── lista-productos.component.css
├── detalle-producto/
│     ├── detalle-producto.component.ts
│     ├── detalle-producto.component.html
│     └── detalle-producto.component.css
└── carrito/
├── carrito.component.ts
├── carrito.component.html
└── carrito.component.css

````

---

## 🚦 Configuración de Rutas

```ts
export const routes: Routes = [
  { path: '', component: ListaProductosComponent },
  { path: 'producto/:id', component: ProductoDetalleComponent },
  {
    path: 'carrito',
    loadComponent: () =>
      import('./pages/carrito/carrito.component').then(m => m.CarritoComponent)
  },
  { path: '**', redirectTo: '' }
];
````

---

## 🧁 Lista de Productos

Vista principal que muestra productos de pastelería en un **grid responsive**.
Cada tarjeta incluye:

* Imagen
* Nombre
* Precio
* Botón “Ver detalles”

Ruta:

```
/
```

---

## 🍰 Detalle del Producto

Muestra información detallada del postre seleccionado.
Obtiene el ID desde la URL:

```
/producto/:id
```

Incluye:

* Imagen en mayor tamaño
* Nombre
* Precio
* Descripción
* Botón para volver

---

## 🛒 Vista del Carrito

Página demostrativa utilizada para explicar:

* Cómo crear nuevas rutas
* Cómo vincular botones a rutas
* Lazy loading en Angular

Ruta:

```
/carrito
```

---

## 🧭 Navbar

Ofrece navegación hacia:

* Inicio
* Carrito
* Contacto

Incluye animaciones suaves y estilo pastel.

---

## 🛠 Tecnologías Utilizadas

* Angular (v17+)
* Componentes Standalone
* Angular Router
* HTML + CSS
* Diseño pastel temático

---

## 🎯 Objetivo

Este proyecto fue creado con fines educativos para comprender:

* Configuración del Routing
* Navegación entre componentes
* Rutas dinámicas
* Lazy loading
* Buenas prácticas con Standalone Components

---

## 👩‍💻 Autora

Desarrollado por **Valery Chumpitaz**, como práctica guiada del módulo de Routing en Angular.

---

## 💗 Gracias por visitar este proyecto

¡Disfruta navegando por la Pastelería DulceRuta! 🍰✨
>>>>>>> 4fd8eb5cada3b0eb951a525e0461944abf0f99ae
