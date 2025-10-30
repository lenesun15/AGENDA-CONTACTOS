#!/bin/bash

# Script para iniciar todos los servicios de la agenda de contactos

# Iniciar el servicio de base de datos
echo "Iniciando el servicio de base de datos..."
docker-compose up -d database

# Iniciar el servicio de API Gateway
echo "Iniciando el servicio de API Gateway..."
docker-compose up -d api-gateway

# Iniciar el servicio de contactos
echo "Iniciando el servicio de contactos..."
docker-compose up -d contacts-service

# Iniciar el servicio de autenticación
echo "Iniciando el servicio de autenticación..."
docker-compose up -d auth-service

# Iniciar el servicio de notificaciones
echo "Iniciando el servicio de notificaciones..."
docker-compose up -d notifications-service

# Iniciar el servicio de búsqueda
echo "Iniciando el servicio de búsqueda..."
docker-compose up -d search-service

# Iniciar el frontend
echo "Iniciando el frontend..."
docker-compose up -d frontend

echo "Todos los servicios han sido iniciados."