#!/bin/bash

# Este script siembra la base de datos con datos iniciales para la agenda de contactos.

# Variables de configuración
DB_HOST="localhost"
DB_PORT="5432"
DB_NAME="agenda_contactos"
DB_USER="usuario"
DB_PASSWORD="contraseña"

# Comando para sembrar la base de datos
psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -f ./database/postgres/init/schema.sql
psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -f ./database/postgres/migrations/001_create_contacts.sql

# Insertar datos iniciales
psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME <<EOF
INSERT INTO contacts (name, email, phone) VALUES
('Juan Pérez', 'juan.perez@example.com', '123456789'),
('María López', 'maria.lopez@example.com', '987654321'),
('Carlos García', 'carlos.garcia@example.com', '456789123');
EOF

echo "Base de datos sembrada con datos iniciales."