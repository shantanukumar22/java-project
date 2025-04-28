// src/main/java/com/example/demo/repositories/LostAndFoundRepository.java

package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.LostAndFound;

public interface LostAndFoundRepository extends JpaRepository<LostAndFound, Long> {
}