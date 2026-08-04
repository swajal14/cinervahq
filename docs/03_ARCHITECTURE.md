# 03_ARCHITECTURE.md

## Project Name
Cinerva

## Architecture Overview

Cinerva follows a layered architecture with a React frontend, Spring Boot backend, MySQL database, and external movie APIs.

The frontend communicates only with the backend. External APIs are accessed through the backend to ensure security and maintainability.

---

## High-Level Architecture

User
↓
React Frontend
↓
Spring Boot Backend
↓
MySQL Database

External Services:
- TMDB API
- YouTube Trailer Data

---

## Frontend Architecture

Technology:
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios

Modules:
- Home Page
- Movie Search
- Movie Details
- Trailer Section
- Price Comparison
- Platform Redirect

Folder Structure:

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── hooks/
│   ├── types/
│   ├── utils/
│   └── routes/

---

## Backend Architecture

Technology:
- Java
- Spring Boot
- Spring Data JPA
- MySQL

Architecture Pattern:
- Controller Layer
- Service Layer
- Repository Layer
- DTO Layer

Structure:

backend/
├── controller/
├── service/
├── repository/
├── entity/
├── dto/
├── config/
├── exception/
└── util/

---

## Database Strategy

Purpose:
Store comparison information.

Initial Data:
- Platforms
- Theatres
- Movies
- Ticket Pricing
- Convenience Fees
- Taxes
- Offers

Future:
Replace mock pricing data with real integrations.

---

## External Integrations

### TMDB API

Purpose:
- Movie Search
- Posters
- Ratings
- Cast Information
- Movie Details

### YouTube

Purpose:
- Trailer Display

---

## Comparison Engine

Responsibilities:

- Compare all available platforms
- Calculate final payable amount

Formula:

Final Amount =
Ticket Price +
Convenience Fee +
Tax -
Discount

Output:

- Cheapest Option
- Savings Information

---

## Security Principles

- No API keys in frontend
- Backend handles all external requests
- Input validation on APIs

---

## Scalability Plan

Future support:

- Direct booking
- User accounts
- Notifications
- Price alerts
- Real-time integrations
- Recommendation engine
