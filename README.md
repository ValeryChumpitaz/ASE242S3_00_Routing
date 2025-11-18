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

```
  
