package com.example.demo.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Resource {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String url;  // Link to the resource
    private String category;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;  // The user who uploaded the resource
}