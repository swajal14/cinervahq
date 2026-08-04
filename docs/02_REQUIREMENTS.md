# 02_REQUIREMENTS.md

## Project Name
Cinerva

## Product Overview

Cinerva is a movie ticket price comparison platform that helps users compare the actual payable ticket price across multiple booking platforms.

The platform provides transparent pricing by displaying ticket price, convenience fees, taxes, offers, cashback benefits, and the final payable amount.

---

## Functional Requirements

### FR-001 City Selection

Users shall be able to select a city before searching for movies.

### FR-002 Movie Search

Users shall be able to search for movies currently running in the selected city.

### FR-003 Movie Details

Users shall be able to view:
- Movie Title
- Poster
- Overview
- Genre
- Runtime
- Rating
- Cast Information
- Release Date

### FR-004 Trailer Viewing

Users shall be able to watch movie trailers.

### FR-005 Theatre Discovery

System shall automatically identify all theatres showing the selected movie in the selected city.

### FR-006 Price Comparison

System shall display:
- Platform Name
- Theatre Name
- Ticket Price
- Convenience Fee
- Tax
- Cashback/Offers
- Final Payable Amount

### FR-007 Cheapest Option Highlight

System shall automatically identify and highlight the cheapest option.

### FR-008 Booking Redirect

Users shall be redirected to the selected booking platform.

---

## Non-Functional Requirements

### Performance
- Search response < 2 seconds
- Page load < 3 seconds

### Security
- API keys must remain server-side
- Input validation on all requests

### Scalability
- Support future booking integrations

### Maintainability
- Modular architecture
- Reusable components

### Accessibility
- Responsive design
- Mobile-friendly interface

---

## User Stories

### US-001
As a user, I want to select my city so that I can view relevant movies.

### US-002
As a user, I want to search movies so that I can quickly find what I want to watch.

### US-003
As a user, I want to compare ticket prices so that I can save money.

### US-004
As a user, I want to see convenience fees and taxes so that I know the real ticket cost.

### US-005
As a user, I want to watch trailers before booking.

### US-006
As a user, I want to be redirected to the selected platform to complete my booking.

---

## MVP Scope

Included:
- City Selection
- Movie Search
- Movie Details
- Trailer Integration
- Theatre Discovery
- Price Comparison
- Cheapest Option Highlight
- Booking Redirect

Excluded:
- User Login
- Direct Booking
- Seat Selection
- Payment Gateway
- Notifications
- Wishlist
- Price Alerts