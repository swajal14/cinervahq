# 04_DATABASE.md

## Database Overview

Database: MySQL

Purpose:
Store movie comparison data, theatres, platforms, and pricing information.

---

## Entity: Movie

Description:
Stores movie information retrieved from TMDB.

Fields:

- id (PK)
- tmdb_id
- title
- overview
- poster_url
- backdrop_url
- release_date
- runtime
- rating
- language
- created_at
- updated_at

---

## Entity: Theatre

Description:
Stores theatre information.

Fields:

- id (PK)
- name
- city
- address
- created_at
- updated_at

---

## Entity: Platform

Description:
Stores booking platforms.

Fields:

- id (PK)
- name
- website_url
- logo_url
- active
- created_at
- updated_at

Examples:
- BookMyShow
- Paytm
- PVR
- INOX

---

## Entity: MovieShow

Description:
Represents a movie running at a theatre.

Fields:

- id (PK)
- movie_id (FK)
- theatre_id (FK)
- show_date
- show_time
- language
- format

Examples:
- 2D
- 3D
- IMAX

---

## Entity: PriceComparison

Description:
Stores pricing details for a movie show on a platform.

Fields:

- id (PK)
- movie_show_id (FK)
- platform_id (FK)
- ticket_price
- convenience_fee
- tax_amount
- discount_amount
- final_amount
- booking_url
- created_at
- updated_at

---

## Formula

final_amount =
ticket_price +
convenience_fee +
tax_amount -
discount_amount

---

## Future Tables

Not included in MVP:

- User
- Booking
- Payment
- Notification
- Wishlist
- PriceAlert

These will be introduced when direct booking functionality is implemented.