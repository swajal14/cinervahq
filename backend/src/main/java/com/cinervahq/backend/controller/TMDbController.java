package com.cinervahq.backend.controller;

import com.cinervahq.backend.service.TMDbService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tmdb")
@CrossOrigin(origins = "http://localhost:5173")
public class TMDbController {

    private final TMDbService tmdbService;

    public TMDbController(TMDbService tmdbService) {
        this.tmdbService = tmdbService;
    }

    @GetMapping("/search")
    public String searchMovie(@RequestParam String query) {
        return tmdbService.searchMovie(query);
    }
}