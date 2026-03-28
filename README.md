![Docker](https://img.shields.io/badge/Docker-Ready-blue)
![.NET](https://img.shields.io/badge/.NET-8-blue)
![React](https://img.shields.io/badge/React-19-blue)

# Cloud Task Manager
**Autor:** Jakub Szewczyk  
**Nr studenta:** 99604

## Opis projektu
Cloud Task Manager to aplikacja webowa umożliwiająca użytkownikom zarządzanie listą zadań.  
Użytkownik może tworzyć, edytować, usuwać zadania oraz przeglądać ich szczegóły.  
Komunikacja pomiędzy front-endem a back-endem odbywa się poprzez REST API.

## Stos technologiczny
- Front-end: React 19 + Vite
- Back-end: ASP.NET Core Web API (.NET 8)
- Database: PostgreSQL (Docker)

## Mapowanie architektury na usługi Azure
| Warstwa | Komponent | Lokalnie (Docker) | Azure (docelowo) |
|---|---|---|---|
| Presentation | Front-end (React) | frontend container | Azure App Service / Static Web Apps |
| Application | Back-end API (.NET) | backend container | Azure App Service |
| Data | Database | PostgreSQL container | Azure Database for PostgreSQL |

## Demo

Frontend: http://localhost:8080  
Backend (Swagger): http://localhost:8081/swagger

