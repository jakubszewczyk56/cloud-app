# Cloud Task Manager

Autor: Jakub Szewczyk  
Nr studenta: 99604  

---

## Opis projektu

Cloud Task Manager to aplikacja webowa umożliwiająca zarządzanie listą zadań.  
Użytkownik może dodawać, usuwać oraz oznaczać zadania jako wykonane.  

Aplikacja została zbudowana w architekturze klient-serwer, gdzie frontend komunikuje się z backendem za pomocą REST API.

---

## Technologie

- Frontend: React 19 + Vite  
- Backend: ASP.NET Core Web API (.NET 8)  
- Baza danych: Azure SQL Database  
- Chmura: Microsoft Azure (App Service)  

---

## Architektura systemu

| Warstwa       | Komponent        | Lokalnie           | Azure                  |
|--------------|------------------|--------------------|------------------------|
| Presentation | Frontend (React) | Vite (localhost)   | Azure App Service      |
| Application  | Backend (.NET)   | ASP.NET Core       | Azure App Service      |
| Data         | Database         | SQL Server / Local | Azure SQL Database     |

---

## Deployment (Azure)

Aplikacja została wdrożona w środowisku chmurowym Microsoft Azure:

- Backend (API):  
  https://cloud-task-manager-api-kuba-f7bdbbdsc8dtc2ht.germanywestcentral-01.azurewebsites.net/swagger

- Frontend:  
  https://cloud-task-manager-api-kuba-f7bdbbdsc8dtc2ht.germanywestcentral-01.azurewebsites.net/

---

## Funkcjonalności

- Dodawanie nowych zadań  
- Usuwanie zadań  
- Oznaczanie jako wykonane (DONE)  
- Pobieranie listy zadań z bazy danych  

---

## Uruchomienie lokalne

### Backend
cd backend  
dotnet run  

### Frontend
cd frontend  
npm install  
npm run dev  

---
