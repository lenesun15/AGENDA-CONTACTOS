# Agenda de Contactos

Este proyecto es una aplicación de gestión de contactos que permite a los usuarios agregar, editar, eliminar y visualizar contactos. La arquitectura del proyecto está compuesta por varios servicios diferenciados que se comunican entre sí a través de una API.

## Estructura del Proyecto

El proyecto está organizado en varias carpetas y servicios:

- **frontend**: Contiene la aplicación React que sirve como interfaz de usuario.
  - `package.json`: Configuración y dependencias del frontend.
  - `tsconfig.json`: Configuración de TypeScript.
  - `public/index.html`: Página HTML principal.
  - `src`: Contiene los archivos fuente de la aplicación.
    - `main.tsx`: Punto de entrada de la aplicación.
    - `App.tsx`: Componente principal de la aplicación.
    - `components`: Contiene componentes reutilizables.
      - `ContactList.tsx`: Muestra la lista de contactos.
      - `ContactForm.tsx`: Permite agregar o editar contactos.
      - `Header.tsx`: Muestra el encabezado de la aplicación.
    - `pages`: Contiene las diferentes páginas de la aplicación.
      - `Home.tsx`: Página principal.
      - `ContactDetail.tsx`: Muestra los detalles de un contacto específico.
    - `services`: Contiene funciones para interactuar con la API.
      - `apiClient.ts`: Funciones para realizar solicitudes HTTP.

- **services**: Contiene los microservicios que manejan la lógica de negocio.
  - `api-gateway`: Servicio que enruta las solicitudes a los servicios correspondientes.
  - `contacts-service`: Maneja la lógica relacionada con los contactos.
  - `auth-service`: Maneja la autenticación de usuarios.
  - `notifications-service`: Envía notificaciones a los usuarios.
  - `search-service`: Permite buscar contactos.

- **database**: Contiene la configuración y los scripts para la base de datos.
  - `postgres`: Scripts de inicialización y migraciones para PostgreSQL.
  - `ormconfig.json`: Configuración del ORM utilizado.

- **infra**: Contiene la configuración de infraestructura.
  - `docker-compose.yml`: Configuración para Docker Compose.
  - `k8s`: Configuración para Kubernetes.

- **docs**: Documentación adicional sobre la arquitectura y el uso del proyecto.

- **scripts**: Scripts útiles para el desarrollo y la gestión del proyecto.
  - `start-all.sh`: Script para iniciar todos los servicios.
  - `seed-db.sh`: Script para sembrar la base de datos con datos iniciales.

- **.env.example**: Ejemplo de archivo de configuración de variables de entorno.

## Instalación

1. Clona el repositorio.
2. Navega a la carpeta `frontend` y ejecuta `npm install` para instalar las dependencias del frontend.
3. Navega a cada uno de los servicios en la carpeta `services` y ejecuta `npm install` para instalar las dependencias.
4. Configura la base de datos y ejecuta las migraciones.
5. Usa `docker-compose up` para iniciar todos los servicios.

## Uso

Una vez que todos los servicios estén en funcionamiento, puedes acceder a la aplicación a través de tu navegador en `http://localhost:3000`. Desde allí, podrás gestionar tus contactos de manera sencilla.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.