package com.cinervahq.backend.repository;

import com.cinervahq.backend.entity.PriceComparison;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PriceComparisonRepository extends JpaRepository<PriceComparison, Long> {

    PriceComparison findTopByMovieIdOrderByTotalPriceAsc(Long movieId);

}