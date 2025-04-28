package com.example.demo.models;

import java.time.LocalDate;

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
@Table(name = "events")
public class Event {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String eventName;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String eventDetails;

    @Column(nullable = false)
    private LocalDate eventDate;

    @Column(nullable = false)
    private String hostedByClub;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] eventBannerImage;
}