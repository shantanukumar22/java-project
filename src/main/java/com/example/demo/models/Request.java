// package com.example.demo.models;

// import jakarta.persistence.*;
// import lombok.Getter;
// import lombok.Setter;

// @Entity
// @Getter
// @Setter
// public class Request {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     private String title;
//     private String description;
//     private String category;

//     @ManyToOne
//     @JoinColumn(name = "user_id")
//     private User user;  // The user who made the request
// }
package com.example.demo.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String category;
    
    private String status; // ✅ ADD THIS FIELD

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;  // The user who made the request
}