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

## Status Projektu
- [x] Artefakt 1: Architektura i struktura folderów
- [x] Artefakt 2: Docker Compose uruchomiony lokalnie
- [x] Artefakt 3: Frontend (React + Vite)
- [x] Artefakt 4: REST API + baza danych
- [x] Artefakt 5: DTO + migracje + trwałość danych