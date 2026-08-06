package com.cinervahq.backend.controller;

import com.cinervahq.backend.entity.PriceComparison;
import com.cinervahq.backend.repository.PriceComparisonRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/prices")
@CrossOrigin(origins = "http://localhost:5173")
public class PriceComparisonController {

    private final PriceComparisonRepository priceComparisonRepository;

    public PriceComparisonController(PriceComparisonRepository priceComparisonRepository) {
        this.priceComparisonRepository = priceComparisonRepository;
    }

    @GetMapping
    public List<PriceComparison> getAllPrices() {
        return priceComparisonRepository.findAll();
    }
}