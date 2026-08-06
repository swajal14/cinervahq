package com.cinervahq.backend.repository;

import com.cinervahq.backend.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {
}