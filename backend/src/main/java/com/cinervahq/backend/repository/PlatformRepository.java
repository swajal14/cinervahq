package com.cinervahq.backend.repository;

import com.cinervahq.backend.entity.Platform;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlatformRepository extends JpaRepository<Platform, Long> {
}