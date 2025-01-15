# inventoryManagerApi

**inventoryManagerApi** es una API RESTful diseñada para la gestión de inventarios de productos. Utiliza **Node.js** y **Express** para el backend, y **PostgreSQL** como sistema de base de datos. El proyecto está en sus primeras etapas de desarrollo, con funcionalidades de autenticación y manejo básico de productos.

## Tecnologías

- **Backend**: Node.js, Express
- **Base de datos**: PostgreSQL
- **Autenticación**: JWT y bcrypt para seguridad en contraseñas.

## Funcionalidades Actuales

- **Autenticación básica**: Registro de usuarios y login con JWT.
- **Gestión de productos**: Funciones para añadir y listar productos.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/inventoryManagerApi.git

2. Instala las dependencias:
   ```bash
    npm install

4. Crea el archivo .env en la raíz del proyecto y agrega tus variables de entorno:
   ```makefile
    DB_USER=usuario_db
    DB_HOST=localhost
    DB_NAME=inventory_manager_db
    DB_PASSWORD=contraseña_db
    DB_PORT=5432
    JWT_SECRET=tu_secreto_jwt

5. Ejecuta el servidor:
   ```bash
    npm start
   
La API estará disponible en http://localhost:3000.

Rutas Disponibles

|    Método   |     Ruta    | Descripción |
|-------------|-------------|-------------|
| POST | /api/auth/register  | Registrar un nuevo usuario.  |
| POST  | /api/auth/login  | Iniciar sesión y obtener JWT.  |
| GET  | /api/products  | Obtener la lista de productos.  |
| POST  | /api/products  | Añadir un nuevo producto al inventario.  |

Contribuciones
Este proyecto aún está en desarrollo. Si deseas contribuir, por favor abre un pull request con tus cambios.

```yaml

---

Este **`README.md`** refleja que el proyecto está en sus primeras etapas, destacando las tecnologías utilizadas y las funcionalidades básicas que ya están implementadas. Además, deja claro que está en constante desarrollo y que se aceptan contribuciones.
