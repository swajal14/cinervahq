package com.cinervahq.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "price_comparisons")
public class PriceComparison {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double ticketPrice;
    private Double convenienceFee;
    private Double totalPrice;

    @ManyToOne
    private Movie movie;

    @ManyToOne
    private Platform platform;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getTicketPrice() {
        return ticketPrice;
    }

    public void setTicketPrice(Double ticketPrice) {
        this.ticketPrice = ticketPrice;
    }

    public Double getConvenienceFee() {
        return convenienceFee;
    }

    public void setConvenienceFee(Double convenienceFee) {
        this.convenienceFee = convenienceFee;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public Platform getPlatform() {
        return platform;
    }

    public void setPlatform(Platform platform) {
        this.platform = platform;
    }
}