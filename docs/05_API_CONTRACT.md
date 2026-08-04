# 05_API_CONTRACT.md

## API Overview

Base URL:

/api/v1

Response Format:

{
"success": true,
"data": {},
"message": "Operation successful"
}

Error Format:

{
"success": false,
"message": "Resource not found"
}

---

## Movie APIs

### Search Movies

GET /api/v1/movies/search

Query Params:

- city
- keyword

Example:

GET /api/v1/movies/search?city=Hyderabad&keyword=Coolie

Response:

{
"success": true,
"data": [
{
"id": 1,
"title": "Coolie",
"posterUrl": "..."
}
]
}

---

### Get Movie Details

GET /api/v1/movies/{movieId}

Response:

{
"success": true,
"data": {
"id": 1,
"title": "Coolie",
"overview": "...",
"rating": 8.4
}
}

---

### Get Movie Trailer

GET /api/v1/movies/{movieId}/trailer

Response:

{
"success": true,
"data": {
"youtubeUrl": "..."
}
}

---

## Theatre APIs

### Get Available Theatres

GET /api/v1/movies/{movieId}/theatres

Query Params:

- city

Response:

{
"success": true,
"data": [
{
"theatreId": 1,
"name": "PVR Nexus Mall"
}
]
}

---

## Comparison APIs

### Get Price Comparison

GET /api/v1/movies/{movieId}/compare

Query Params:

- city

Response:

{
"success": true,
"data": [
{
"platform": "BookMyShow",
"ticketPrice": 200,
"convenienceFee": 35,
"taxAmount": 7,
"discountAmount": 0,
"finalAmount": 242
}
]
}

---

### Get Cheapest Option

GET /api/v1/movies/{movieId}/cheapest

Response:

{
"success": true,
"data": {
"platform": "Paytm",
"finalAmount": 234
}
}

---

## Redirect API

### Get Booking URL

GET /api/v1/comparison/{comparisonId}/redirect

Response:

{
"success": true,
"data": {
"bookingUrl": "..."
}
}

---

## Future APIs

Not Included In MVP

- Authentication
- Booking
- Payment
- Wishlist
- Notifications
- Price Alerts