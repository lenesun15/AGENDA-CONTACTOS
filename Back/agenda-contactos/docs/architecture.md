# Arquitectura de la Agenda de Contactos

Este documento describe la arquitectura del proyecto "Agenda de Contactos", que se compone de varios servicios diferenciados que trabajan juntos para proporcionar una aplicación funcional y escalable.

## Servicios

1. **Frontend**
   - Desarrollado en React, el frontend se encarga de la interfaz de usuario y la interacción con el usuario.
   - Componentes principales:
     - `ContactList`: Muestra la lista de contactos.
     - `ContactForm`: Permite agregar o editar contactos.
     - `Header`: Muestra el encabezado de la aplicación.
   - Utiliza `apiClient.ts` para interactuar con la API.

2. **API Gateway**
   - Actúa como un punto de entrada único para todas las solicitudes de la aplicación.
   - Enruta las solicitudes a los servicios correspondientes (como el servicio de contactos, autenticación, etc.).
   - Implementado en Node.js.

3. **Contacts Service**
   - Maneja la lógica de negocio relacionada con los contactos.
   - Proporciona endpoints para crear, leer, actualizar y eliminar contactos.
   - Interactúa con la base de datos a través de repositorios.

4. **Auth Service**
   - Gestiona la autenticación y autorización de usuarios.
   - Proporciona endpoints para el registro y el inicio de sesión.
   - Implementa estrategias de autenticación (por ejemplo, JWT).

5. **Notifications Service**
   - Se encarga de enviar notificaciones a los usuarios (por ejemplo, correos electrónicos).
   - Utiliza un worker para procesar las notificaciones en segundo plano.

6. **Search Service**
   - Proporciona funcionalidades de búsqueda para los contactos.
   - Permite a los usuarios buscar contactos por nombre, correo electrónico, etc.

7. **Base de Datos**
   - Utiliza PostgreSQL como sistema de gestión de bases de datos.
   - Contiene las tablas necesarias para almacenar la información de los contactos y usuarios.
   - Incluye scripts de inicialización y migraciones para gestionar el esquema de la base de datos.

## Infraestructura

- **Docker**: Todos los servicios están containerizados utilizando Docker, lo que facilita su despliegue y escalabilidad.
- **Kubernetes**: Se utiliza Kubernetes para la orquestación de los contenedores en producción.
- **Docker Compose**: Se proporciona un archivo `docker-compose.yml` para facilitar el desarrollo local y la orquestación de servicios.

## Conclusión

La arquitectura de la Agenda de Contactos está diseñada para ser modular y escalable, permitiendo la adición de nuevos servicios y funcionalidades en el futuro. Cada servicio tiene una responsabilidad clara y se comunica a través de APIs, lo que facilita el mantenimiento y la evolución del sistema.