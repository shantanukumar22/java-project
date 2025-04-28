// src/main/java/com/example/demo/models/LostAndFound.java

package com.example.demo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "lost_and_found")
public class LostAndFound {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String itemName;

    @Column(nullable = false)
    private String description;

    @Lob
    @Column(columnDefinition = "LONGBLOB") // Image stored as binary
    private byte[] itemImage;

    @Column(nullable = false)
    private boolean found = false; // Initially not found

    @Column(nullable = false)
    private boolean isLost = true; // Indicates whether it's a lost item
}