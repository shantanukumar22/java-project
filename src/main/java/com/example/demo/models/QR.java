// package com.example.demo.models;

// import jakarta.persistence.*;
// import lombok.Getter;
// import lombok.Setter;

// @Getter
// @Setter
// @Entity
// @Table(name = "qr_codes")
// public class QR {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     @Lob
//     @Column(columnDefinition = "LONGBLOB") // Store image as binary data
//     private byte[] qrImage;

//     @Column(nullable = false)
//     private boolean used = false; // Default: Not used
// }


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
@Table(name = "qr_codes")
public class QR {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @Column(columnDefinition = "LONGBLOB") // Image stored as binary
    private byte[] qrImage;

    @Column(nullable = false)
    private boolean used = false; // Initially not used
}