# Cloud Task Manager

Aplikacja webowa do zarządzania zadaniami (CRUD) oparta o architekturę 3-warstwową i uruchamiana w Dockerze.

## Autor
Jakub Szewczyk  
Nr studenta: 99604  

---

## Opis projektu

Cloud Task Manager to aplikacja umożliwiająca zarządzanie listą zadań.  
Użytkownik może:
- dodawać zadania
- edytować zadania
- usuwać zadania
- oznaczać zadania jako wykonane

Frontend komunikuje się z backendem poprzez REST API.

---

## Stos technologiczny

- Frontend: React + Vite + TypeScript
- Backend: ASP.NET Core Web API (.NET 8)
- ORM: Entity Framework Core
- Baza danych: PostgreSQL
- Konteneryzacja: Docker + Docker Compose

---

## Architektura

| Warstwa       | Komponent        | Lokalnie (Docker) | Azure (docelowo) |
|--------------|----------------|------------------|-----------------|
| Presentation | React Frontend | frontend container | Azure App Service |
| Application  | ASP.NET API    | backend container  | Azure App Service |
| Data         | PostgreSQL     | db container       | Azure Database for PostgreSQL |

---

## Funkcjonalności

- REST API (GET, POST, PUT, DELETE)
- DTO (oddzielenie modelu od API)
- migracje Entity Framework Core
- formularz React do dodawania zadań
- trwałość danych (Docker volume)

---

## Uruchomienie projektu

### Wymagania
- Docker Desktop

### Start

```bash
docker compose up -d --build