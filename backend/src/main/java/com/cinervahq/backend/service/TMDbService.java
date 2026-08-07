package com.cinervahq.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class TMDbService {

    @Value("${tmdb.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    public String searchMovie(String query) {

        System.out.println("API KEY = " + apiKey);

        String url =
                "https://api.themoviedb.org/3/search/movie?api_key="
                        + apiKey
                        + "&query="
                        + query;

        System.out.println("TMDB URL = " + url);

        return restTemplate.getForObject(url, String.class);
    }
}