package com.cinervahq.backend.controller;

import com.cinervahq.backend.entity.Platform;
import com.cinervahq.backend.repository.PlatformRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/platforms")
@CrossOrigin(origins = "http://localhost:5173")
public class PlatformController {

    private final PlatformRepository platformRepository;

    public PlatformController(PlatformRepository platformRepository) {
        this.platformRepository = platformRepository;
    }

    @GetMapping
    public List<Platform> getAllPlatforms() {
        return platformRepository.findAll();
    }
}