package com.cinervahq.backend.controller;

import com.cinervahq.backend.entity.PriceComparison;
import com.cinervahq.backend.repository.PriceComparisonRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/prices")
public class PriceComparisonController {

    private final PriceComparisonRepository repository;

    public PriceComparisonController(PriceComparisonRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<PriceComparison> getAllPrices() {
        return repository.findAll();
    }

    @GetMapping("/best/{movieId}")
    public PriceComparison getBestPrice(@PathVariable Long movieId) {
        return repository.findTopByMovieIdOrderByTotalPriceAsc(movieId);
    }
}